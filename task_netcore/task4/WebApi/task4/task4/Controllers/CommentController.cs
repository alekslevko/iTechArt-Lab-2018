using System;
using System.Linq;
using System.Security.Claims;
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
    public class CommentController : Controller
    {
        private readonly ICommentService _commentService;

        public CommentController(ICommentService commentService)
        {
            _commentService = commentService;
        }

        [HttpGet("{id}")]
        public IActionResult GetComments(int id)
        {
            var comments = _commentService.GetComments(id);

            if (comments == null)
            {
                return NotFound();
            }

            return Ok(comments);
        }

        [Authorize]
        [HttpPost]
        public IActionResult AddComment([FromBody]CommentModel commentModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

             var comment = Mapper.Map<CommentModel, Comment>(commentModel);
            
             comment.UserId = HttpContext.User.Claims.Where(claim => claim.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
             comment.Date = DateTime.Now.ToString();
             _commentService.AddComment(comment);

            return Ok(comment);
        }
    }
}