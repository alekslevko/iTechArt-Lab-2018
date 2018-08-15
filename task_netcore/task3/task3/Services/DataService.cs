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
        MoviesContext _context;

        public DataService(MoviesContext context)
        {
            _context = context;
        }

        public IEnumerable<Movie> GetData()
        {
            return _context.Movies.ToList();
        }

        public Movie GetDataById(int id)
        {
            var movie = _context.Movies.FirstOrDefault(x => x.Id == id);

            return movie;
        }

        public Movie AddData([FromBody]Movie movie)
        {
            _context.Movies.Add(movie);
            _context.SaveChanges();

            return movie;
        }

        public Movie UpdateData([FromBody]Movie movie)
        {
            _context.Update(movie);
            _context.SaveChanges();

            return movie;
        }

        public Movie DeleteData(int id)
        {
            var movie = _context.Movies.FirstOrDefault(x => x.Id == id);
            _context.Movies.Remove(movie);
            _context.SaveChanges();

            return movie;
        }
    }
}
