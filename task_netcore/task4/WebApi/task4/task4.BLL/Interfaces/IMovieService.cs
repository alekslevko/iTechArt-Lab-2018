using System.Collections.Generic;
using System.Threading.Tasks;
using task4.BLL.Models;

namespace task4.BLL.Interfaces
{
    public interface IMovieService
    {
        Task<IList<MovieModel>> GetMoviesAsync();

        Task<MovieInfoModel> GetMovieInfoByIdAsync(int movieId);

        Task<decimal> UpdateMovieRatingAsync(int movieId);
    }
}