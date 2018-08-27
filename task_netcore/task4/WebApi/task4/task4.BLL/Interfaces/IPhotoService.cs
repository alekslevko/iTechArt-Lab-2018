using System.Collections.Generic;
using System.Threading.Tasks;
using task4.BLL.Models;

namespace task4.BLL.Interfaces
{
    public interface IPhotoService
    {
        Task<IList<PhotoModel>> GetPhotosAsync(int movieId);
    }
}
