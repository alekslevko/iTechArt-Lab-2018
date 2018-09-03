using Microsoft.AspNetCore.Identity;
using System;
using task4.DAL.EF;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationContext _context;

        private IRepository<Movie> _movieRepository;
        private IRepository<User> _userRepository;
        private IRepository<Photo> _photoRepository;
        private IRepository<Comment> _commentRepository;
        private IRepository<Rating> _ratingRepository;

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

        public IRepository<Movie> MovieRepository => 
            _movieRepository ?? (_movieRepository = new Repository<Movie>(_context));

        public IRepository<User> UserRepository =>
            _userRepository ?? (_userRepository = new Repository<User>(_context));

        public IRepository<Photo> PhotoRepository =>
            _photoRepository ?? (_photoRepository = new Repository<Photo>(_context));

        public IRepository<Comment> CommentRepository =>
            _commentRepository ?? (_commentRepository = new Repository<Comment>(_context));

        public IRepository<Rating> RatingRepository =>
            _ratingRepository ?? (_ratingRepository = new Repository<Rating>(_context));    

        public void Commit()
        {
            _context.SaveChanges();
        }

        private bool _disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
                _disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
