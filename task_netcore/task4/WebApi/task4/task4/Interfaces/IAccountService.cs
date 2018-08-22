using System.Threading.Tasks;
using task4.Models;

namespace task4.Interfaces
{
    public interface IAccountService
    {
        Task<ResultAccountModel> Register(RegisterViewModel model);

        Task<ResultAccountModel> Login(LoginViewModel model);
    }
}
