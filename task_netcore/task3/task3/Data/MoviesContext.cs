using Microsoft.EntityFrameworkCore;
using task3.Data.Entities;

namespace task3.Data
{
    public class MoviesContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }

        public MoviesContext(DbContextOptions<MoviesContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie>().HasData(
                new Movie {
                    Id = 1,
                    Name = "Suits",
                    Country = "USA",
                    Producer = "Gene Klein",
                    Year = 2011
                },
                new Movie {
                    Id = 2,
                    Name = "Thor",
                    Country = "USA",
                    Producer = "Kevin Feige",
                    Year = 2011
                }
            );

        }
    }
}
