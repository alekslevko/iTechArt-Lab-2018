using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using task4.BLL.Interfaces;

namespace task4.WEB.Controllers
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
        public async Task<IActionResult> GetPhotos(int id)
        {
            var photos = await _photoService.GetPhotosAsync(id);

            if (photos == null)
            {
                return NotFound();
            }

            return Ok(photos);
        }
    }
}