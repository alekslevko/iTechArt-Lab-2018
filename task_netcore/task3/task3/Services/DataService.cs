using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using task3.Data;
using task3.Data.Entities;
using task3.Interfaces;

namespace task3.Services
{
    public class DataService: IDataService
    {
        private readonly MoviesContext _context;

        public DataService(MoviesContext context)
        {
            _context = context;
        }

        public IQueryable<Movie> GetData()
        {
            IQueryable<Movie> movies = _context.Movies;
            return movies;
        }

        public Movie GetDataById(int id)
        {
            var movie = _context.Movies.FirstOrDefault(x => x.Id == id);

            return movie;
        }

        public Movie AddData(Movie movie)
        {
            _context.Movies.Add(movie);
            _context.SaveChanges();

            return movie;
        }

        public Movie UpdateData(Movie movie)
        {
            _context.Update(movie);
            _context.SaveChanges();

            return movie;
        }

        public Movie DeleteData(int id)
        {
            var movie = _context.Movies.FirstOrDefault(x => x.Id == id);
            if(movie == null)
            {
                return null;
            }
            _context.Movies.Remove(movie);
            _context.SaveChanges();

            return movie;
        }
    }
}
