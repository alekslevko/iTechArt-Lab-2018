using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using task4.DAL.EF;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.DAL.Repositories
{
    public class PhotoRepository: IPhotoRepository
    {
        private readonly ApplicationContext _context;

        public PhotoRepository(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<IList<Photo>> GetPhotosByMovieIdAsync(int movieId)
        {
            return await _context.Photos.Where(p => p.MovieId == movieId).ToListAsync();
        }
    }
}