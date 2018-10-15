using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.BLL.Services
{
    public class MovieService: IMovieService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public MovieService(IUnitOfWork uow, IMapper mapper)
        {
            _unitOfWork = uow;
            _mapper = mapper;
        }

        public IList<MovieModel> GetMovies()
        {
            var movies = _unitOfWork.MovieRepository.GetQueryableAll().ToList();

            return _mapper.Map<IList<Movie>, IList<MovieModel>>(movies);
        }

        public IList<MovieModel> GetMoviesByName(string movieName)
        {
            var movies = _unitOfWork.MovieRepository.GetQueryableAll().Where(m => m.Name.Contains(movieName)).ToList();

            return _mapper.Map<IList<Movie>, IList<MovieModel>>(movies); ;
        }

        public MovieInfoModel GetMovieInfoById(int movieId)
        {
            var movie = _unitOfWork.MovieRepository.GetQueryableAll().Select(x => new Movie()
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

            return _mapper.Map<Movie, MovieInfoModel>(movie);
        }

        public async Task<decimal> UpdateMovieRating(int movieId)
        {
            var movie = _unitOfWork.MovieRepository.GetById(movieId);
            var rating = _unitOfWork.RatingRepository.GetQueryableAll().Where(r => r.Movie.Id == movieId).Average(r => r.Value);

            if (movie != null)
            {
                movie.Rating = (rating != 0) ? Math.Round(rating, 1) : 0;
            }

            await _unitOfWork.CommitAsync();

            return Math.Round(movie.Rating, 1);
        }
    }
}
