using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using task4.DAL.EF;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.DAL.Repositories
{
    public class UserRepository: IUserRepository
    {
        private readonly ApplicationContext _context;

        public UserRepository(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<User> GetUserByIdAsync(string userId)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
        }
    }
}