using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task4.Data.Entities;
using task4.Interfaces;
using task4.Models;

namespace task4.Controllers
{
    [Route("[controller]/[action]")]
    public class RatingController : Controller
    {
        private readonly IRatingService _ratingService;

        public RatingController(IRatingService ratingService)
        {
            _ratingService = ratingService;
        }

        [Authorize]
        [HttpPost]
        public IActionResult AddRating([FromBody] RatingModel ratingModel)
        {
            var rating = Mapper.Map<RatingModel, Rating>(ratingModel);
            rating.UserId = HttpContext.User.Claims.Where(claim => claim.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
            _ratingService.AddRating(rating);

            return Ok(rating);
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetUserRating(int id)
        {
            var userId = HttpContext.User.Claims.Where(claim => claim.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
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