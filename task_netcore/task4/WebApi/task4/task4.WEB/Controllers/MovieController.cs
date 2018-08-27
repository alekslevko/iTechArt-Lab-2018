using System.Threading.Tasks;
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
        public async Task<IActionResult> GetMovies()
        {
            return Ok(await _movieService.GetMoviesAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie(int id)
        {
            var movie = await _movieService.GetMovieInfoByIdAsync(id);

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }
    }
}