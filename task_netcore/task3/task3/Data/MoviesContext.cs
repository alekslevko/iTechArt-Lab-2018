using Microsoft.EntityFrameworkCore;
using task3.Data.Entities;

namespace task3.Data
{
    public class MoviesContext: DbContext
    {
        public DbSet<Movie> Movies { get; set; }

        public MoviesContext(DbContextOptions<MoviesContext> options)
            : base(options)
        { }
    }
}
