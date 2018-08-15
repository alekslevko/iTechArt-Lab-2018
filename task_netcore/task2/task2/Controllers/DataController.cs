using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using task2.Interfaces;

namespace task2.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly IDataService _dataService;

        public DataController(IDataService dataService)
        {
            _dataService = dataService;
        }

        [HttpGet]
        public ActionResult SyncAction()
        {
            return Ok(_dataService.GetInfo());
        }

        [HttpGet("async")]
        public async Task<ActionResult> AsyncAction()
        {
            return Ok(await _dataService.GetInfoAsync()); 
        }
    }
}