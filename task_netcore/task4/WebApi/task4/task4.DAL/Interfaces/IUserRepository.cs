using System.Threading.Tasks;
using task4.DAL.Entities;

namespace task4.DAL.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUserByIdAsync(string id);
    }
}
