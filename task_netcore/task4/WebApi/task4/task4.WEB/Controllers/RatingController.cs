using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.WEB.Models;
using task4.WEB.Common;
using System;

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
        public IActionResult AddRating([FromBody] RatingViewModel ratingViewModel)
        {
            var rating = _mapper.Map<RatingViewModel, RatingModel>(ratingViewModel);

            rating.UserId = Convert.ToInt32(HttpContext.GetUserIdByHttpContext());

            var ratingResult = _ratingService.AddRating(rating);

            if (ratingResult.Errors != null)
            {
                return BadRequest(ratingResult.Errors);
            }

            return Ok();
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetUserRating(int id)
        {
            var userId = Convert.ToInt32(HttpContext.GetUserIdByHttpContext());
            var responceRaitingModel = _ratingService.GetUserRating(userId, id);

            return Ok(responceRaitingModel);
        }

        [HttpGet("{id}")]
        public IActionResult GetAverageRating(int id)
        {
            return Ok(_ratingService.GetAverageRating(id));
        }
    }
}