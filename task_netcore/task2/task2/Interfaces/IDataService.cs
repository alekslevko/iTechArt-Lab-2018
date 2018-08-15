using System.Threading.Tasks;
using task2.Models;

namespace task2.Interfaces
{
    public interface IDataService
    {
        ResponseModel GetInfo();

        Task<ResponseModel> GetInfoAsync();
    }
}
