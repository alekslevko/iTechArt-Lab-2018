using System.Collections.Generic;
using System.Threading.Tasks;
using task4.BLL.Models;

namespace task4.BLL.Interfaces
{
    public interface ICommentService
    {
        IList<CommentModel> GetCommentsByMovieId(int movieId);

        Task<CommentModel> AddComment(CommentModel commentModel);
    }
}
