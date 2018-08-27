using System.Threading.Tasks;
using task4.BLL.Models;

namespace task4.BLL.Interfaces
{
    public interface IRatingService
    {
        Task<RatingResultModel> AddRatingAsync(RatingModel rating);

        Task<RatingResultModel> GetUserRatingAsync(string userId, int movieId);

        Task<decimal> GetAverageRatingAsync(int MovieId);
    }
}