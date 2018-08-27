using AutoMapper;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.BLL.Services
{
    public class MovieService: IMovieService
    {
        private readonly IUnitOfWork dataBase;
        private readonly IMapper _mapper;

        public MovieService(IUnitOfWork uow, IMapper mapper)
        {
            dataBase = uow;
            _mapper = mapper;
        }

        public async Task<IList<MovieModel>> GetMoviesAsync()
        {
            var movies = await dataBase.MovieRepository.GetMoviesAsync();
            var moviesModel = _mapper.Map<IList<Movie>, IList<MovieModel>>(movies);

            return moviesModel;
        }

        public async Task<MovieInfoModel> GetMovieInfoByIdAsync(int movieId)
        {
            var movie = await dataBase.MovieRepository.GetMovieByIdAsync(movieId);
            var movieInfoModel = _mapper.Map<Movie, MovieInfoModel>(movie);

            return movieInfoModel;
        }

        public async Task<decimal> UpdateMovieRatingAsync(int movieId)
        {
            var movie = await dataBase.MovieRepository.GetMovieByIdAsync(movieId);
            var rating = await dataBase.RatingRepository.GetAverageRatingByMovieIdAsync(movieId);

            if (movie != null)
            {
                if (rating != 0)
                {
                    movie.Rating = Math.Round(rating, 1);
                }
                else
                {
                    movie.Rating = 0;
                }

            }

            await dataBase.SaveAsync();

            return Math.Round(movie.Rating, 1);
        }
    }
}
