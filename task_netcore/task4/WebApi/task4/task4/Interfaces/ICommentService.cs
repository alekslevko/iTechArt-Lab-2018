using System.Linq;
using task4.Data.Entities;

namespace task4.Interfaces
{
    public interface ICommentService
    {
        IQueryable<Comment> GetComments(int movieId);

        Comment AddComment(Comment comment);
    }
}
