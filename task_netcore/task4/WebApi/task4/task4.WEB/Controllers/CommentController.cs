using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.WEB.Common;
using task4.WEB.Models;
using task4.WEB.SignalR;

namespace task4.WEB.Controllers
{
    [Route("[controller]/[action]")]
    public class CommentController : Controller
    {
        private readonly ICommentService _commentService;
        private readonly IMapper _mapper;
        private readonly IHubContext<CommentHub> _hubContext;

        public CommentController(ICommentService commentService, IMapper mapper, IHubContext<CommentHub> hubContext)
        {
            _commentService = commentService;
            _mapper = mapper;
            _hubContext = hubContext;
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
        public async Task<IActionResult> AddComment([FromBody] CommentViewModel commentViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var comment = _mapper.Map<CommentViewModel, CommentModel>(commentViewModel);

            comment.UserId = Convert.ToInt32(HttpContext.GetUserIdByHttpContext());
            comment.Date = DateTime.Now.ToString();

            await _commentService.AddComment(comment);
            await _hubContext.Clients.All.SendAsync("GetComments", _commentService.GetCommentsByMovieId(comment.MovieId));

            return Ok();
        }
    }
}