using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using task4.Data;
using task4.Data.Entities;
using task4.Interfaces;
using task4.Models;

namespace task4.Services
{
    public class CommentService: ICommentService
    {
        private readonly ApplicationContext _context;

        public CommentService(ApplicationContext context)
        {
            _context = context;
        }

        public IList<CommentResponseModel> GetComments(int movieId)
        {
            var comments = _context.Comments.Where(c => c.MovieId == movieId).ToList();

            return Mapper.Map<IList<Comment>, IList<CommentResponseModel>>(comments);
        }

        public Comment AddComment(Comment comment)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == comment.UserId);

            comment.UserName = user.UserName;
            _context.Comments.Add(comment);
            _context.SaveChanges();

            return comment;
        }
    }
}
