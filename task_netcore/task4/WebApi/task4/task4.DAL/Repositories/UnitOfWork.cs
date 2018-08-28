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
        private readonly ApplicationContext _context;

        private IRepository<Movie> movieRepository;
        private IRepository<User> userRepository;
        private IRepository<Photo> photoRepository;
        private IRepository<Comment> commentRepository;
        private IRepository<Rating> ratingRepository;

        public UnitOfWork (ApplicationContext context,
            UserManager<User> userManager,
            SignInManager<User> signInManager)
        {
            _context = context;
            UserManager = userManager;
            SignInManager = signInManager;
        }

        public UserManager<User> UserManager { get; }
        public SignInManager<User> SignInManager { get; }
        public IRepository<Movie> MovieRepository
        {
            get
            {
                if (movieRepository == null)
                    movieRepository = new Repository<Movie>(_context);
                return movieRepository;
            }
        }
        public IRepository<User> UserRepository
        {
            get
            {
                if (userRepository == null)
                    userRepository = new Repository<User>(_context);
                return userRepository;
            }
        }
        public IRepository<Photo> PhotoRepository
        {
            get
            {
                if (photoRepository == null)
                    photoRepository = new Repository<Photo>(_context);
                return photoRepository;
            }
        }
        public IRepository<Comment> CommentRepository
        {
            get
            {
                if (commentRepository == null)
                    commentRepository = new Repository<Comment>(_context);
                return commentRepository;
            }
        }
        public IRepository<Rating> RatingRepository
        {
            get
            {
                if (ratingRepository == null)
                    ratingRepository = new Repository<Rating>(_context);
                return ratingRepository;
            }            
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
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
