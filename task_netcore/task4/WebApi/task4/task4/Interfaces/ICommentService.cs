using System.Collections.Generic;
using System.Linq;
using task4.Data.Entities;
using task4.Models;

namespace task4.Interfaces
{
    public interface ICommentService
    {
        IList<CommentResponseModel> GetComments(int movieId);

        Comment AddComment(Comment comment);
    }
}
