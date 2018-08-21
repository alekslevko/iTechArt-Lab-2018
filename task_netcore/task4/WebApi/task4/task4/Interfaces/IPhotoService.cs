using System.Linq;
using task4.Data.Entities;

namespace task4.Interfaces
{
    public interface IPhotoService
    {
        IQueryable<Photo> GetPhotos(int id);
    }
}
