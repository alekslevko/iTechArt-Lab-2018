using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;
using task4.DAL.EF;
using task4.DAL.Entities;

namespace task4.DAL.Interfaces
{
    public interface IUnitOfWork: IDisposable
    {
        ApplicationContext ApplicationContext { get; }

        UserManager<User> UserManager { get; }

        SignInManager<User> SignInManager { get; }

        IUserRepository UserRepository { get; }

        IMovieRepository MovieRepository { get; }

        IPhotoRepository PhotoRepository { get; }

        ICommentRepository CommentRepository { get; }        

        IRatingRepository RatingRepository { get; }

        Task SaveAsync();
    }
}
