using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using task4.BLL.Infastructure;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.BLL.Services
{
    public class AccountService: IAccountService
    {
        private readonly IUnitOfWork dataBase;

        public AccountService(IUnitOfWork  uow)
        {
            dataBase = uow;
        }

        public async Task<AccountResultModel> Register(AccountModel accountModel)
        {
            var user = new User
            {
                UserName = accountModel.UserName
            };

            var result = await dataBase.UserManager.CreateAsync(user, accountModel.Password);
            var accountResultModel = new AccountResultModel();

            if (result.Succeeded)
            {
                await dataBase.SignInManager.SignInAsync(user, false);

                accountResultModel.Token = GenerateJwtToken(accountModel.UserName, user);

                return accountResultModel;
            }
            else
            {
                accountResultModel.Errors = new List<string>();

                foreach (var error in result.Errors)
                {
                    accountResultModel.Errors.Add(error.Description);
                }

                return accountResultModel;
            }

            throw new ApplicationException("UNKNOWN_ERROR");
        }

        public async Task<AccountResultModel> Login(AccountModel accountModel)
        {
            var result = await dataBase.SignInManager.PasswordSignInAsync(accountModel.UserName, accountModel.Password, false, false);
            var accountResultModel = new AccountResultModel();

            if (result.Succeeded)
            {
                var appUser = dataBase.UserManager.Users.SingleOrDefault(r => r.UserName == accountModel.UserName);

                accountResultModel.Token = GenerateJwtToken(accountModel.UserName, appUser);

                return accountResultModel;
            }
            else
            {
                accountResultModel.Errors = new List<string>();

                accountResultModel.Errors.Add("Incorrect login or password");

                return accountResultModel;
            }

            throw new ApplicationException("UNKNOWN_ERROR");
        }

        private string GenerateJwtToken(string userName, User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, userName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = TokenSettings.GetSymmetricSecurityKey();
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(TokenSettings.JwtExpireDays));

            var token = new JwtSecurityToken(
                TokenSettings.JwtIssuer,
                TokenSettings.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
