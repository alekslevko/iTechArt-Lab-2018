using Microsoft.AspNetCore.Mvc;
using task1.Models;

namespace task1.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        [HttpGet]
        public ActionResult Get(SumModel model)
        {
            if (ModelState.IsValid)
            {
                return Ok(new SumModel { A = model.A, B = model.B, Sum = (int)(model.A + model.B) });
            }
            else
            {
                return BadRequest(ModelState);
            }
        }        
    }
}
