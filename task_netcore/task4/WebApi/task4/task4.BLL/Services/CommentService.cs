﻿using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
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

        public IList<CommentModel> GetCommentsByMovieId(int movieId)
        {
            var comments = dataBase.CommentRepository.GetQueryableAll().Where(c => c.MovieId == movieId).Select(x => new Comment()
            { Date = x.Date, Message = x.Message, User = x.User}).ToList();

            return _mapper.Map<IList<Comment>, IList<CommentModel>>(comments);
        }

        public void AddComment(CommentModel commentModel)
        {
            var user = dataBase.UserRepository.GetById(commentModel.UserId);

            var comment = _mapper.Map<CommentModel, Comment>(commentModel);

            comment.User = dataBase.UserRepository.GetById(commentModel.UserId);

            dataBase.CommentRepository.Add(comment);
            dataBase.Commit();
        }
    }
}
