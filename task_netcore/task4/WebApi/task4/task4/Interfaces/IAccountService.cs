using System.Threading.Tasks;
using task4.Models;

namespace task4.Interfaces
{
    public interface IAccountService
    {
        Task<object> Register(RegisterViewModel model);

        Task<object> Login(LoginViewModel model);
    }
}
