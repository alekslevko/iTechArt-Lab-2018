using Microsoft.AspNetCore.Mvc;
using task4.BLL.Interfaces;

namespace task4.WEB.Controllers
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
            var movie = _movieService.GetMovieInfoById(id);

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }
    }
}