using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public IQueryable<Comment> GetComments(int movieId)
        {
            var comments = _context.Comments.Where(c => c.MovieId == movieId);

            return comments;
        }

        public Comment AddComment(Comment comment)
        {   
            _context.Comments.Add(comment);
            _context.SaveChanges();

            return comment;
        }
    }
}
