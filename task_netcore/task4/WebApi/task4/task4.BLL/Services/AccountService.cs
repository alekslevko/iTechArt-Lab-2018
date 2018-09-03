using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.BLL.Services
{
    public class AccountService : IAccountService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IConfiguration _configuration;

        public AccountService(IUnitOfWork uow, IConfiguration configuration)
        {
            _unitOfWork = uow;
            _configuration = configuration;
        }

        public async Task<AccountResultModel> Register(AccountModel accountModel)
        {
            var user = new User
            {
                UserName = accountModel.UserName
            };

            var result = await _unitOfWork.UserManager.CreateAsync(user, accountModel.Password);
            var accountResultModel = new AccountResultModel();

            if (result.Succeeded)
            {
                await _unitOfWork.SignInManager.SignInAsync(user, false);

                accountResultModel.Token = GenerateJwtToken(accountModel.UserName, user);

                return accountResultModel;
            }

            accountResultModel.Errors = new List<string>();

            foreach (var error in result.Errors)
            {
                accountResultModel.Errors.Add(error.Description);
            }

            return accountResultModel;
        }

        public async Task<AccountResultModel> Login(AccountModel accountModel)
        {
            var result = await _unitOfWork.SignInManager.PasswordSignInAsync(accountModel.UserName, accountModel.Password, false, false);
            var accountResultModel = new AccountResultModel();

            if (result.Succeeded)
            {
                var appUser = _unitOfWork.UserManager.Users.SingleOrDefault(r => r.UserName == accountModel.UserName);

                accountResultModel.Token = GenerateJwtToken(accountModel.UserName, appUser);

                return accountResultModel;
            }

            accountResultModel.Errors = new List<string>();

            accountResultModel.Errors.Add("Incorrect login or password");

            return accountResultModel;
        }

        private string GenerateJwtToken(string userName, User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, userName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                _configuration["JwtIssuer"],
                _configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}