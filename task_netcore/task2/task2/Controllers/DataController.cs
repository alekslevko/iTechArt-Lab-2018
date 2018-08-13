using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using task2.Services;

namespace task2.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly IDataService dataService;

        public DataController(IDataService dataService)
        {
            this.dataService = dataService;
        }

        [HttpGet]
        public ActionResult SyncAction()
        {
            return new ObjectResult(dataService.GetInfo());
        }

        [HttpGet("async")]
        public async Task<ActionResult> AsyncAction()
        {
            return new ObjectResult(await dataService.GetInfoAsync()); 
        }
    }
}