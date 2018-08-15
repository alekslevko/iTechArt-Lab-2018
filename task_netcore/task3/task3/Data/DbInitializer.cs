using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using task3.Data.Entities;

namespace task3.Data
{
    public class DbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.GetRequiredService<IServiceScopeFactory>()
                    .CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<MoviesContext>();

                if (!context.Movies.Any())
                {
                    context.Movies.Add(new Movie { Name = "Suits", Country = "USA", Producer = "Gene Klein", Year = 2011 });
                    context.Movies.Add(new Movie { Name = "Thor", Country = "USA", Producer = "Kevin Feige", Year = 2011 });
                    context.SaveChanges();
                }

                context.SaveChanges();
            }
        }
    }
}
