using System.Collections.Generic;
using System.Threading.Tasks;
using task4.DAL.Entities;

namespace task4.DAL.Interfaces
{
    public interface ICommentRepository
    {
        Task<IList<Comment>> GetCommentsByMovieIdAsync(int movieId);

        Task AddCommentAsync(Comment comment);
    }
}