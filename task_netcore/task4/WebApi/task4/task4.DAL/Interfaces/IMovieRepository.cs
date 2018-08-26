using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using task4.DAL.Entities;

namespace task4.DAL.Interfaces
{
    public interface IMovieRepository
    {
        Task<IList<Movie>> GetMoviesAsync();

        Task<Movie> GetMovieByIdAsync(int movieId);
    }
}
