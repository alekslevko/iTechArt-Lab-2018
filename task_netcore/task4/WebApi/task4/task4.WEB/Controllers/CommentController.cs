using System;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.WEB.Common;
using task4.WEB.Models;

namespace task4.WEB.Controllers
{
    [Route("[controller]/[action]")]
    public class CommentController : Controller
    {
        private readonly ICommentService _commentService;
        private readonly IMapper _mapper;

        public CommentController(ICommentService commentService, IMapper mapper)
        {
            _commentService = commentService;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public IActionResult GetComments(int id)
        {
            var comments = _commentService.GetCommentsByMovieId(id);

            if (comments == null)
            {
                return NotFound();
            }

            return Ok(comments);
        }

        [Authorize]
        [HttpPost]
        public IActionResult AddComment([FromBody] CommentViewModel commentViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var comment = _mapper.Map<CommentViewModel, CommentModel>(commentViewModel);

            comment.UserId = HttpContext.GetUserIdByHttpContext();
            comment.Date = DateTime.Now.ToString();

            _commentService.AddComment(comment);

            return Ok(comment);
        }
    }
}