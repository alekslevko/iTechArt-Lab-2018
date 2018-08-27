using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.BLL.Services
{
    public class CommentService: ICommentService
    {
        private readonly IUnitOfWork dataBase;
        private readonly IMapper _mapper;

        public CommentService(IUnitOfWork uow, IMapper mapper)
        {
            dataBase = uow;
            _mapper = mapper;
        }

        public async Task<IList<CommentModel>> GetCommentsByMovieIdAsync(int movieId)
        {
            var comments = await dataBase.CommentRepository.GetCommentsByMovieIdAsync(movieId);

            return _mapper.Map<IList<Comment>, IList<CommentModel>>(comments);
        }

        public async Task AddCommentAsync(CommentModel commentModel)
        {
            var user = await dataBase.UserRepository.GetUserByIdAsync(commentModel.UserId);

            var comment = _mapper.Map<CommentModel, Comment>(commentModel);

            comment.User = await dataBase.UserRepository.GetUserByIdAsync(commentModel.UserId);

            await dataBase.CommentRepository.AddCommentAsync(comment);
            await dataBase.SaveAsync();
        }
    }
}
