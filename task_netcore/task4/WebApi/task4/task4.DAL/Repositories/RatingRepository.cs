using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using task4.DAL.EF;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.DAL.Repositories
{
    public class RatingRepository: IRatingRepository
    {
        private readonly ApplicationContext _context;

        public RatingRepository(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<decimal> GetAverageRatingByMovieIdAsync(int movieId)
        {
            return await _context.Ratings.Where(r => r.MovieId == movieId).AverageAsync(r => r.Value);
        }

        public async Task<Rating> GetUserRatingByMovieIdandUserIdAsync(int movieId, string userId)
        {
            return await _context.Ratings.FirstOrDefaultAsync(r => r.MovieId == movieId && r.UserId == userId);
        }
    }
}
