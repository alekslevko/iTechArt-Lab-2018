using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using task4.DAL.Entities;

namespace task4.DAL.EF
{
    public class ApplicationContext : IdentityDbContext<User>
    {
        public DbSet<Movie> Movies { get; set; }

        public DbSet<Photo> Photos { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<Rating> Ratings { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Movie>().HasMany(m => m.Photos).WithOne(m => m.Movie).OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>().HasMany(u => u.Comments).WithOne(u => u.User).OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>().HasMany(u => u.Ratings).WithOne(u => u.User).OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Movie>().HasData(
                new Movie
                {
                    MovieId = 1,
                    Name = "Thor",
                    Country = "USA",
                    Producer = "Kevin Feige",
                    Year = 2011,
                    Rating = 0M,
                    Genre = "Fantasy",
                    PictureUrl = "https://media.kg-portal.ru/movies/t/thor/posters/thor_7.jpg",
                    Description = "An epic adventure takes place, both on our planet," +
                    " and in the fictional Kingdom of the Gods of Asgard." +
                    " In the center of history is the Mighty Thor, " +
                    "a strong but arrogant warrior, whose reckless actions," +
                    " the revival of the ancient war in Asgard. The Torah is sent into exile to the Earth," +
                    " devoid of power, and observance of ordinary people, as punishment ...",
                },
                new Movie
                {
                    MovieId = 2,
                    Name = "Lucy",
                    Country = "France",
                    Producer = "Virginie Besson-Silla",
                    Year = 2014,
                    Rating = 0M,
                    Genre = "Thriller",
                    PictureUrl = "http://lostfilm.info/images/poster/545/5447501.jpg",
                    Description = "Yesterday she was just a sexy blonde, and today is the most dangerous and" +
                    " deadly creature on the planet with supernatural abilities and intelligence." +
                    " The fact that recently the best minds of the world have considered fantastic theories," +
                    " it has become a reality. And now with production, it will become a hunter." +
                    " Her name is Lucy..."
                },
                new Movie
                {
                    MovieId = 3,
                    Name = "Unknown",
                    Country = "UK",
                    Producer = "Joel Silver",
                    Year = 2011,
                    Rating = 0M,
                    Genre = "Thriller",
                    PictureUrl = "https://www.movieposter.com/posters/archive/main/119/MPW-59897",
                    Description = "This film tells about a man who, after awakening from a coma," +
                    " discovers that his personality is appropriated to another," +
                    " and understands that no one, even his own wife, believes him. And then," +
                    " with the help of an unknown young woman-taxi driver," +
                    " the hero rushes to prove who he is."
                },
                new Movie
                {
                    MovieId = 4,
                    Name = "Suits",
                    Country = "USA",
                    Producer = "Gene Klein",
                    Year = 2011,
                    Rating = 0M,
                    Genre = "Drama",
                    PictureUrl = "https://st.kp.yandex.net/im/poster/2/4/0/kinopoisk.ru-Suits-2405451.jpg",
                    Description = "Raging after an unsuccessful attempt to sell drugs," +
                    " self-taught lawyer Mike Ross, posing as a graduate of Harvard," +
                    " gets to interview one of the best lawyers for New York deals," +
                    " Harvey Spectrum."
                },
                new Movie
                {
                    MovieId = 5,
                    Name = "Three Billboards Outside Ebbing, Missouri",
                    Country = "USA",
                    Producer = "Martin McDonagh",
                    Year = 2017,
                    Rating = 0M,
                    Genre = "Drama",
                    PictureUrl = "https://fanart.tv/fanart/movies/359940/movieposter/three-billboards-outside-ebbing-missouri-5a84165c374d4.jpg",
                    Description = "A few months after the murder of the daughter of Mildred Hayes," +
                    " the criminals were never found. The desperate woman decides to take a bold step," +
                    " renting three billboards at the entrance to the city with a message" +
                    " to the authoritative head of the police, William Willoughby. When the deputy sheriff," +
                    " an infantile mama's son with a violent inclination, officer Dixon is involved in the situation," +
                    " the struggle between Mildred and the city authorities is only aggravated."
                },
                new Movie
                {
                    MovieId = 6,
                    Name = "The second life of Uwe",
                    Country = "Sweden",
                    Producer = "Hannes Holm",
                    Year = 2015,
                    Rating = 0M,
                    Genre = "Drama",
                    PictureUrl = "http://cinecinema.org/uploads/posts/2016-07/1469737425_en-man-som-heter-ove.jpg",
                    Description = "Who is he, this Uwe? Aging thorough grumbler, reaching neighbors with endless trailers." +
                    " He falls into a rage at the sight of a garbage or an improperly standing machine." +
                    " And the light is on what light stands a frivolous family of new settlers," +
                    " in which the father and nail can not drive. But despite all of the above," +
                    " Uwe can do everything: masterfully cram his saab between the porch and the mailbox," +
                    " repair the battery, puncture the discount from the very tight-fisted shopkeeper."
                }
            );

            modelBuilder.Entity<Photo>().HasData(
                new Photo
                {
                    PhotoId = 1,
                    MovieId = 1,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/48244/208943.jpg"
                },
                new Photo
                {
                    PhotoId = 2,
                    MovieId = 1,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/48244/572581.jpg"
                },
                new Photo
                {
                    PhotoId = 3,
                    MovieId = 1,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/48244/208942.jpg"
                },
                new Photo
                {
                    PhotoId = 4,
                    MovieId = 1,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/48244/208940.jpg"
                },
                 new Photo
                 {
                     PhotoId = 5,
                     MovieId = 2,
                     pictureUrl = "https://www.kino-teatr.ru/movie/kadr/108477/739108.jpg"
                 },
                new Photo
                {
                    PhotoId = 6,
                    MovieId = 2,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/108477/739110.jpg"
                },
                new Photo
                {
                    PhotoId = 7,
                    MovieId = 2,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/108477/739111.jpg"
                },
                new Photo
                {
                    PhotoId = 8,
                    MovieId = 2,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/108477/739113.jpg"
                },
                new Photo
                {
                    PhotoId = 9,
                    MovieId = 3,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/91794/190675.jpg"
                },
                new Photo
                {
                    PhotoId = 10,
                    MovieId = 3,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/91794/190674.jpg"
                },
                new Photo
                {
                    PhotoId = 11,
                    MovieId = 3,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/91794/190673.jpg"
                },
                new Photo
                {
                    PhotoId = 12,
                    MovieId = 3,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/91794/190670.jpg"
                },
                new Photo
                {
                    PhotoId = 13,
                    MovieId = 4,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/96533/245756.jpg"
                },
                new Photo
                {
                    PhotoId = 14,
                    MovieId = 4,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/96533/554509.jpg"
                },
                new Photo
                {
                    PhotoId = 15,
                    MovieId = 4,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/96533/554512.jpg"
                },
                new Photo
                {
                    PhotoId = 16,
                    MovieId = 4,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/96533/554510.jpg"
                },
                new Photo
                {
                    PhotoId = 17,
                    MovieId = 5,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/125987/751751.jpg"
                },
                new Photo
                {
                    PhotoId = 18,
                    MovieId = 5,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/125987/751750.jpg"
                },
                new Photo
                {
                    PhotoId = 19,
                    MovieId = 5,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/125987/751752.jpg"
                },
                new Photo
                {
                    PhotoId = 20,
                    MovieId = 5,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/125987/751749.jpg"
                },
                new Photo
                {
                    PhotoId = 21,
                    MovieId = 6,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/120115/665900.jpg"
                },
                new Photo
                {
                    PhotoId = 22,
                    MovieId = 6,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/120115/665899.jpg"
                },
                new Photo
                {
                    PhotoId = 23,
                    MovieId = 6,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/120115/665898.jpg"
                },
                new Photo
                {
                    PhotoId = 24,
                    MovieId = 6,
                    pictureUrl = "https://www.kino-teatr.ru/movie/kadr/120115/665897.jpg"
                }
            );
        }
    }
}
