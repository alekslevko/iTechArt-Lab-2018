using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using task4.DAL.EF;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.DAL.Repositories
{
    public class CommentRepository: ICommentRepository
    {
        private readonly ApplicationContext _context;

        public CommentRepository(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<IList<Comment>> GetCommentsByMovieIdAsync(int movieId)
        {
            return await _context.Comments.Include(c => c.User).Where(c => c.MovieId == movieId).ToListAsync();
        }

        public async Task AddCommentAsync(Comment comment)
        {
            await _context.AddAsync(comment);
        }
    }
}
