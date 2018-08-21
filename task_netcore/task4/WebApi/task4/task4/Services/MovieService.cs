using System.Linq;
using task4.Data.Entities;
using task4.Interfaces;
using task4.Data;

namespace task4.Services
{
    public class MovieService : IMovieService
    {
        private readonly ApplicationContext _context;

        public MovieService(ApplicationContext context)
        {
            _context = context;
        }

        public IQueryable<Movie> GetMovies()
        {
            IQueryable<Movie> movies = _context.Movies;

            return movies;
        }
        
        public Movie GetMovieInfo(int id)
        {
            var movie = _context.Movies.FirstOrDefault(x => x.Id == id);

            return movie;
        }       
    }
}
