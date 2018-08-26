using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using task4.Data.Entities;
using task4.Models;

namespace task4.Interfaces
{
    public interface IRatingService
    {
        RatingResponseModel AddRating(Rating rating);

        RatingResponseModel GetUserRating(string userId, int movieId);

        decimal GetAverageRating(int MovieId);
    }
}
