using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.BLL.Services
{
    public class RatingService: IRatingService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IMovieService _movieService;

        public RatingService(IUnitOfWork uow, IMapper mapper, IMovieService movieService)
        {
            _unitOfWork = uow;
            _mapper = mapper;
            _movieService = movieService;
        }

        public RatingResultModel AddRating(RatingModel ratingModel)
        {
            var userRating = _unitOfWork.RatingRepository.GetQueryableAll().FirstOrDefault(r => r.User.Id == ratingModel.UserId && r.Movie.Id == ratingModel.MovieId);
            var ratingResultModel = new RatingResultModel();

            if (userRating != null)
            {
                ratingResultModel.Errors = new List<string> {"You can't rate again"};

                return ratingResultModel;
            }

            var rating = _mapper.Map<RatingModel, Rating>(ratingModel);

            rating.User = _unitOfWork.UserRepository.GetById(ratingModel.UserId);
            rating.Movie = _unitOfWork.MovieRepository.GetById(ratingModel.MovieId);

            _unitOfWork.RatingRepository.Insert(rating);
            _unitOfWork.Commit();

            _movieService.UpdateMovieRating(rating.Movie.Id);

            return ratingResultModel;
        }

        public RatingResultModel GetUserRating(int userId, int movieId)
        {
            var rating = _unitOfWork.RatingRepository.GetQueryableAll().FirstOrDefault(r => r.User.Id == userId && r.Movie.Id == movieId);
            var movie = _unitOfWork.MovieRepository.GetById(movieId);
            RatingResultModel ratingResultModel;

            if (rating != null && movie != null)
            {
                ratingResultModel = _mapper.Map<Rating, RatingResultModel>(rating);
                ratingResultModel.AlreadyRated = true;

                return ratingResultModel;
            }

            ratingResultModel = new RatingResultModel { AlreadyRated = false };

            return ratingResultModel;
        }

        public decimal GetAverageRating(int movieId)
        {
            var ratings = _unitOfWork.RatingRepository.GetQueryableAll().Where(r => r.Movie.Id == movieId).ToList();

            if (ratings.Count != 0)
            {
                var rating = ratings.Average(r => r.Value);

                return rating;
            }

            return 0;
        }
    }
}
