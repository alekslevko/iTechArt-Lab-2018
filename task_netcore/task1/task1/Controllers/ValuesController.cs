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
            if (ModelState.IsValid)
            {
                var A = model.A.Value;
                var B = model.B.Value;

                return Ok(new SumResponseModel { A = A, B = B, Sum = A + B });
            }

            return BadRequest(ModelState);
        }
    }
}
