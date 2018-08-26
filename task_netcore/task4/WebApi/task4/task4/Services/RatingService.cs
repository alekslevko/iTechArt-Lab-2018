using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using task4.Data;
using task4.Data.Entities;
using task4.Interfaces;
using task4.Models;

namespace task4.Services
{
    public class RatingService: IRatingService
    {
        private readonly IMovieService _movieService;
        private readonly ApplicationContext _context;

        public RatingService(IMovieService movieService, ApplicationContext context)
        {
            _movieService = movieService;
            _context = context;
        }

        public RatingResponseModel AddRating(Rating rating)
        {
            var rat = _context.Ratings.FirstOrDefault(r => r.MovieId == rating.MovieId && r.UserId == rating.UserId);
            var ratingResponceModel = new RatingResponseModel();

            if(rat != null)
            {
                ratingResponceModel.Errors = new List<string>();
                ratingResponceModel.Errors.Add("You can't rate again");

                return ratingResponceModel;
            }

            _context.Ratings.Add(rating);
            _context.SaveChanges();

            return ratingResponceModel;
        }

        public RatingResponseModel GetUserRating(string userId, int movieId)
        {
            var rating = _context.Ratings.FirstOrDefault(r => r.MovieId == movieId && r.UserId == userId);
            var movie = _context.Movies.FirstOrDefault(r => r.Id == movieId);
            var ratingResponceModel = Mapper.Map<Rating, RatingResponseModel>(rating);

            if (rating != null && movie != null)
            {
                ratingResponceModel.AlreadyRated = true;
            }

            return ratingResponceModel;
        }

        public decimal GetAverageRating(int MovieId)
        {
            var rating = _movieService.GetAverageRating(MovieId);

            return rating;
        }
    }
}