using Microsoft.AspNetCore.Mvc;
using task1.Models;

namespace task1.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        [HttpGet]
        public ActionResult Get(SumRequestViewModel model)
        {
            if (ModelState.IsValid && model.A.HasValue && model.B.HasValue)
            {
                var a = model.A.Value;
                var b = model.B.Value;

                return Ok(new SumResponseModel { A = a, B = b, Sum = a + b });
            }

            return BadRequest(ModelState);
        }
    }
}
