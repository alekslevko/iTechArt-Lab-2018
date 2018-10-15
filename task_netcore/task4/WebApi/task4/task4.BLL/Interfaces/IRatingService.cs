using System.Threading.Tasks;
using task4.BLL.Models;

namespace task4.BLL.Interfaces
{
    public interface IRatingService
    {
        Task<RatingResultModel> AddRating(RatingModel rating);

        RatingResultModel GetUserRating(int userId, int movieId);

        decimal GetAverageRating(int movieId);
    }
}