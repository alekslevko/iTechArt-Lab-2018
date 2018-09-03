using Microsoft.AspNetCore.Identity;
using System;
using task4.DAL.Entities;

namespace task4.DAL.Interfaces
{
    public interface IUnitOfWork: IDisposable
    {
        UserManager<User> UserManager { get; }

        SignInManager<User> SignInManager { get; }

        IRepository<User> UserRepository { get; }

        IRepository<Movie> MovieRepository { get; }

        IRepository<Photo> PhotoRepository { get; }

        IRepository<Comment> CommentRepository { get; }

        IRepository<Rating> RatingRepository { get; }

        void Commit();
    }
}
