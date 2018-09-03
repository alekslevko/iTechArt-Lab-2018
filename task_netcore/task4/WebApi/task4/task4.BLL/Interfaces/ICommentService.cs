using System.Collections.Generic;
using task4.BLL.Models;

namespace task4.BLL.Interfaces
{
    public interface ICommentService
    {
        IList<CommentModel> GetCommentsByMovieId(int movieId);

        void AddComment(CommentModel commentModel);
    }
}
