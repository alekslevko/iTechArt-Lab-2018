using System.Threading.Tasks;
using task4.BLL.Models;

namespace task4.BLL.Interfaces
{
    public interface IAccountService
    {
        Task<AccountResultModel> Register(AccountModel model);

        Task<AccountResultModel> Login(AccountModel model);
    }
}
