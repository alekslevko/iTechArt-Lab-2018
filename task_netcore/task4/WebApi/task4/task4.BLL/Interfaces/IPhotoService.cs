using System.Collections.Generic;
using task4.BLL.Models;

namespace task4.BLL.Interfaces
{
    public interface IPhotoService
    {
        IList<PhotoModel> GetPhotos(int movieId);
    }
}
