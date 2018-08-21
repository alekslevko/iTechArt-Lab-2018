using Microsoft.AspNetCore.Mvc;
using task4.Interfaces;

namespace task4.Controllers
{
    [Route("[controller]/[action]")]
    public class MovieController : Controller
    {
        private readonly IMovieService _movieService;

        public MovieController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet]
        public IActionResult GetMovies()
        {
            return Ok(_movieService.GetMovies());
        }

        [HttpGet("{id}")]
        public IActionResult GetMovie(int id)
        {
            var movie = _movieService.GetMovieInfo(id);

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);           
        }
    }
}