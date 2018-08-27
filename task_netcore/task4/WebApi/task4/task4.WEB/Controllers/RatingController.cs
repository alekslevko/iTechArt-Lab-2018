using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.WEB.Models;
using task4.WEB.Common;

namespace task4.WEB.Controllers
{
    [Route("[controller]/[action]")]
    public class RatingController : Controller
    {
        private readonly IRatingService _ratingService;
        private readonly IMapper _mapper;

        public RatingController(IRatingService ratingService, IMapper mapper)
        {
            _ratingService = ratingService;
            _mapper = mapper;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddRating([FromBody] RatingViewModel ratingViewModel)
        {
            var rating = _mapper.Map<RatingViewModel, RatingModel>(ratingViewModel);

            rating.UserId = HttpContext.GetUserIdByHttpContext();

            var ratingResult = await _ratingService.AddRatingAsync(rating);

            if (ratingResult.Errors != null)
            {
                return BadRequest(ratingResult.Errors);
            }

            return Ok();
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserRating(int id)
        {
            var userId = HttpContext.GetUserIdByHttpContext();
            var responceRaitingModel = await _ratingService.GetUserRatingAsync(userId, id);

            return Ok(responceRaitingModel);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAverageRating(int id)
        {
            return Ok(await _ratingService.GetAverageRatingAsync(id));
        }
    }
}