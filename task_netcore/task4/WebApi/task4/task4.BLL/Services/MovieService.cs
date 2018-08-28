using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public IList<MovieModel> GetMovies()
        {
            var movies = dataBase.MovieRepository.GetQueryableAll().ToList();
            var moviesModel = _mapper.Map<IList<Movie>, IList<MovieModel>>(movies);

            return moviesModel;
        }

        public MovieInfoModel GetMovieInfoById(int movieId)
        {
            var movie = dataBase.MovieRepository.GetQueryableAll().Select(x => new Movie()
            {
                Id = x.Id,
                Country = x.Country,
                Description = x.Description,
                Genre = x.Genre,
                Name = x.Name,
                PictureUrl = x.PictureUrl,
                Photos = x.Photos,
                Producer = x.Producer,
                Rating = x.Rating,
                Year = x.Year
            }).FirstOrDefault(x => x.Id == movieId);

            var movieInfoModel = _mapper.Map<Movie, MovieInfoModel>(movie);

            return movieInfoModel;
        }

        public decimal UpdateMovieRating(int movieId)
        {
            var movie = dataBase.MovieRepository.GetById(movieId);
            var rating = dataBase.RatingRepository.GetQueryableAll().Where(r => r.Movie.Id == movieId).Average(r => r.Value);

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

            dataBase.Commit();

            return Math.Round(movie.Rating, 1);
        }
    }
}
