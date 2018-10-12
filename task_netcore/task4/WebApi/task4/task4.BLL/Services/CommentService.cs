using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.BLL.Services
{
    public class CommentService: ICommentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CommentService(IUnitOfWork uow, IMapper mapper)
        {
            _unitOfWork = uow;
            _mapper = mapper;
        }

        public IList<CommentModel> GetCommentsByMovieId(int movieId)
        {
            var comments = _unitOfWork.CommentRepository.GetQueryableAll().Where(c => c.Movie.Id == movieId).Select(x => new Comment
            {
                Date = x.Date,
                Message = x.Message,
                User = x.User,
                Movie = x.Movie
            }).ToList();

            return _mapper.Map<IList<Comment>, IList<CommentModel>>(comments);
        }

        public async Task<CommentModel> AddComment(CommentModel commentModel)
        {
            var user = _unitOfWork.UserRepository.GetById(commentModel.UserId);
            var movie = _unitOfWork.MovieRepository.GetById(commentModel.MovieId);

            var comment = _mapper.Map<CommentModel, Comment>(commentModel);

            comment.User = user;
            comment.Movie = movie;

            commentModel.UserName = user.UserName;

            _unitOfWork.CommentRepository.Insert(comment);
            await _unitOfWork.CommitAsync();

            return commentModel;
        }
    }
}
