using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.BLL.Services
{
    public class RatingService: IRatingService
    {
        private readonly IUnitOfWork dataBase;
        private readonly IMapper _mapper;

        public RatingService(IUnitOfWork uow, IMapper mapper, IMovieService movieService)
        {
            dataBase = uow;
            _mapper = mapper;
        }

        public async Task<RatingResultModel> AddRatingAsync(RatingModel ratingModel)
        {
            var userRating = await dataBase.RatingRepository.GetUserRatingByMovieIdandUserIdAsync(ratingModel.MovieId, ratingModel.UserId);
            var ratingResultModel = new RatingResultModel();

            if (userRating != null)
            {
                ratingResultModel.Errors = new List<string>();
                ratingResultModel.Errors.Add("You can't rate again");

                return ratingResultModel;
            }

            var rating = _mapper.Map<RatingModel, Rating>(ratingModel);

            rating.User = await dataBase.UserRepository.GetUserByIdAsync(ratingModel.UserId);

            await dataBase.RatingRepository.AddRatingAsync(rating);
            await dataBase.SaveAsync();

            return ratingResultModel;
        }

        public async Task<RatingResultModel> GetUserRatingAsync(string userId, int movieId)
        {
            var rating = await dataBase.RatingRepository.GetUserRatingByMovieIdandUserIdAsync(movieId, userId);
            var movie = await dataBase.MovieRepository.GetMovieByIdAsync(movieId);
            var ratingResultModel = _mapper.Map<Rating, RatingResultModel>(rating);

            if (rating != null && movie != null)
            {
                ratingResultModel.AlreadyRated = true;
            }

            return ratingResultModel;
        }

        public async Task<decimal> GetAverageRatingAsync(int movieId)
        {
            var rating = await dataBase.RatingRepository.GetAverageRatingByMovieIdAsync(movieId);

            return rating;
        }
    }
}
