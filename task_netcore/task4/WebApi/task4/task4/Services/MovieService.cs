using System.Linq;
using task4.Data.Entities;
using task4.Interfaces;
using task4.Data;
using System;

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
        
        public decimal GetAverageRating(int id)
        {
            var movie = _context.Movies.FirstOrDefault(x => x.Id == id);
            var rating = _context.Ratings.FirstOrDefault(x => x.MovieId == id);
            if(movie != null)
            {
                if(rating != null)
                {
                    movie.Rating = _context.Ratings.Where(x => x.MovieId == id).Average(x => x.Value);
                }
                else
                {
                    movie.Rating = 0;
                }
               
            }
           
            _context.SaveChanges();

            return Math.Round(movie.Rating, 1);
        }
    }
}
