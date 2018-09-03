using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.WEB.Models;

namespace task4.WEB.Controllers
{
    [Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        private readonly IMapper _mapper;

        public AccountController(IAccountService accountService, IMapper mapper)
        {
            _accountService = accountService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult> Register([FromBody] AccountViewModel accountViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var accountModel = _mapper.Map<AccountViewModel, AccountModel>(accountViewModel);
            var resultModel = await _accountService.Register(accountModel);

            if (resultModel.Errors != null)
            {
                return BadRequest(resultModel.Errors);
            }

            return Ok(new { resultModel.Token, accountViewModel.UserName });
        }

        [HttpPost]
        public async Task<ActionResult> Login([FromBody] AccountViewModel accountViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var accountModel = _mapper.Map<AccountViewModel, AccountModel>(accountViewModel);
            var resultModel = await _accountService.Login(accountModel);

            if (resultModel.Errors != null)
            {
                return BadRequest(resultModel.Errors);
            }

            return Ok(new { resultModel.Token, accountViewModel.UserName });
        }
    }
}