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
        public async Task<ActionResult> Register([FromBody]RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var resultModel = await _accountService.Register(model);

            if(resultModel.Errors != null)
            {
                return BadRequest(resultModel.Errors);
            }

            return Ok(resultModel.Token);
        }

        [HttpPost]
        public async Task<ActionResult> Login([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var resultModel = await _accountService.Login(model);

            if (resultModel.Errors != null)
            {
                return BadRequest(resultModel.Errors);
            }

            return Ok(resultModel.Token);
        }
    }
}