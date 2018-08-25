using System.Linq;
using task4.Data.Entities;

namespace task4.Interfaces
{
    public interface IMovieService
    {
        IQueryable<Movie> GetMovies();

        Movie GetMovieInfo(int id);

        decimal GetAverageRating(int id);
    }
}
