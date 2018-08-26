using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using task4.DAL.EF;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork(
            ApplicationContext applicationContext,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IMovieRepository movieRepository,
            IUserRepository userRepository,
            IPhotoRepository photoRepository,
            ICommentRepository commentRepository,
            IRatingRepository ratingRepository)
        {
            ApplicationContext = applicationContext;
            UserManager = userManager;
            SignInManager = signInManager;
            MovieRepository = movieRepository;
            UserRepository = userRepository;
            PhotoRepository = photoRepository;
            CommentRepository = commentRepository;
            RatingRepository = ratingRepository;
        }

        public ApplicationContext ApplicationContext { get; }
        public UserManager<User> UserManager { get; }
        public SignInManager<User> SignInManager { get; }
        public IMovieRepository MovieRepository { get; }
        public IUserRepository UserRepository { get; }
        public IPhotoRepository PhotoRepository { get; }
        public ICommentRepository CommentRepository { get; }
        public IRatingRepository RatingRepository { get; }
        public async Task SaveAsync()
        {
            await ApplicationContext.SaveChangesAsync();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    ApplicationContext.Dispose();
                }
                disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
