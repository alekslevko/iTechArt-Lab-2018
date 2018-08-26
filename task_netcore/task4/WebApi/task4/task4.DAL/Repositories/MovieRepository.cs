using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using task4.DAL.EF;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.DAL.Repositories
{
    public class MovieRepository: IMovieRepository
    {
        private readonly ApplicationContext _context;

        public MovieRepository(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<IList<Movie>> GetMoviesAsync()
        {
            return await _context.Movies.ToListAsync();
        }

        public async Task<Movie> GetMovieByIdAsync(int movieId)
        {
            return await _context.Movies.Include(m => m.Photos).FirstOrDefaultAsync(m => m.MovieId == movieId);
        }
    }
}
