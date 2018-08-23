using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using task4.Interfaces;
using task4.Models;

namespace task4.Services
{
    public class AccountService: IAccountService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IConfiguration _configuration;

        public AccountService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        public async Task<ResultAccountModel> Register(RegisterViewModel model)
        {  
            var user = new IdentityUser
            {
                UserName = model.UserName
            };

            var result = await _userManager.CreateAsync(user, model.Password);
            var resultModel = new ResultAccountModel();

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);

                resultModel.Token = GenerateJwtToken(model.UserName, user);

                return resultModel;
            }
            else
            {
                resultModel.Errors = new List<string>();

                foreach (var error in result.Errors)
                {
                    resultModel.Errors.Add(error.Description);
                }

                return resultModel;
            }

            throw new ApplicationException("UNKNOWN_ERROR");
        }

        public async Task<ResultAccountModel> Login(LoginViewModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);
            var resultModel = new ResultAccountModel();

            if (result.Succeeded)
            {                               
                var appUser = _userManager.Users.SingleOrDefault(r => r.UserName == model.UserName);

                resultModel.Token = GenerateJwtToken(model.UserName, appUser);

                return resultModel;
            }
            else
            {
                resultModel.Errors = new List<string>();

                resultModel.Errors.Add("Incorrect login or password");

                return resultModel;
            }

            throw new ApplicationException("UNKNOWN_ERROR");
        }

        private string GenerateJwtToken(string userName, IdentityUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, userName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
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
