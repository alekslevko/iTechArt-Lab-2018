using System.Linq;

namespace task4.DAL.Interfaces
{
    public interface IRepository<T> where T: class
    {
        IQueryable<T> GetQueryableAll();

        T GetById(int id);

        void Add(T TEntity);

        void Update(T TEntity);

        void Delete(T TEntity);
    }
}
