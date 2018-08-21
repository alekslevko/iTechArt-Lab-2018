using System.Linq;
using task4.Data;
using task4.Data.Entities;
using task4.Interfaces;

namespace task4.Services
{
    public class PhotoService: IPhotoService
    {
        private readonly ApplicationContext _context;

        public PhotoService(ApplicationContext context)
        {
            _context = context;
        }

        public IQueryable<Photo> GetPhotos(int movieId)
        {
            var photos = _context.Photos.Where(p => p.MovieId == movieId);

            return photos;
        }
    }
}
