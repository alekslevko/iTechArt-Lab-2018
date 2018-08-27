using System.Collections.Generic;
using System.Threading.Tasks;
using task4.BLL.Models;

namespace task4.BLL.Interfaces
{
    public interface ICommentService
    {
        Task<IList<CommentModel>> GetCommentsByMovieIdAsync(int movieId);

        Task AddCommentAsync(CommentModel commentModel);
    }
}
