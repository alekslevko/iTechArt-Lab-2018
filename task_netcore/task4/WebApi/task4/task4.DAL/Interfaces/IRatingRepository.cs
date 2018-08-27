﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using task4.DAL.Entities;

namespace task4.DAL.Interfaces
{
    public interface IRatingRepository
    {
        Task<decimal> GetAverageRatingByMovieIdAsync(int movieId);

        Task<Rating> GetUserRatingByMovieIdandUserIdAsync(int movieId, string userId);

        Task AddRatingAsync(Rating rating);
    }
}