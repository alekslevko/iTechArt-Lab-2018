using Microsoft.AspNetCore.Mvc;
using task4.Interfaces;

namespace task4.Controllers
{
    [Route("[controller]/[action]")]
    public class PhotoController : Controller
    {
        private readonly IPhotoService _photoService;


        public PhotoController(IPhotoService photoService)
        {
            _photoService = photoService;
        }

        [HttpGet("{id}")]
        public IActionResult GetPhotos(int id)
        {
            var photos = _photoService.GetPhotos(id);

            if (photos == null)
            {
                return NotFound();
            }

            return Ok(photos);
        }
    }
}