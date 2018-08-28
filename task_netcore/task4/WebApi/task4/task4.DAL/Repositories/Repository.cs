using Microsoft.EntityFrameworkCore;
using System.Linq;
using task4.DAL.EF;
using task4.DAL.Interfaces;

namespace task4.DAL.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private DbSet<T> _dbSet;

        public Repository(ApplicationContext context)
        {
            _dbSet = context.Set<T>();
        }

        public IQueryable<T> Entities => _dbSet;

        public IQueryable<T> GetQueryableAll()
        {
            return _dbSet;
        }

        public T GetById(int id)
        {
            return _dbSet.Find(id);
        }

        public void Add(T TEntity)
        {
            _dbSet.Add(TEntity);
        }

        public void Update(T TEntity)
        {
            _dbSet.Update(TEntity);
        }

        public void Delete(T TEntity)
        {
            _dbSet.Remove(TEntity);
        }
    }
}
