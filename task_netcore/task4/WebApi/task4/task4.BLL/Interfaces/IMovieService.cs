using System.Collections.Generic;
using System.Threading.Tasks;
using task4.BLL.Models;

namespace task4.BLL.Interfaces
{
    public interface IMovieService
    {
        IList<MovieModel> GetMovies();

        IList<MovieModel> GetMoviesByName(string movieName);

        MovieInfoModel GetMovieInfoById(int movieId);

        Task<decimal> UpdateMovieRating(int movieId);
    }
}