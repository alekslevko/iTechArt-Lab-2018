using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using task4.Models;
using task4.Interfaces;

namespace task4.Controllers
{
    [Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost]
        public async Task<object> Register([FromBody]RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return (await _accountService.Register(model));

        }

        [HttpPost]
        public async Task<object> Login([FromBody] LoginViewModel model)
        {
            return (await _accountService.Login(model));
        }
    }
}