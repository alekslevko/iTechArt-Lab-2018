﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using task4.DAL.EF;

namespace task4.DAL.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20180828160544_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.2-rtm-30932")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("task4.DAL.Entities.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Date");

                    b.Property<string>("Message");

                    b.Property<int?>("MovieId");

                    b.Property<int?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("MovieId");

                    b.HasIndex("UserId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("task4.DAL.Entities.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Country");

                    b.Property<string>("Description");

                    b.Property<string>("Genre");

                    b.Property<string>("Name");

                    b.Property<string>("PictureUrl");

                    b.Property<string>("Producer");

                    b.Property<decimal>("Rating");

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.ToTable("Movies");

                    b.HasData(
                        new { Id = 1, Country = "USA", Description = "An epic adventure takes place, both on our planet, and in the fictional Kingdom of the Gods of Asgard. In the center of history is the Mighty Thor, a strong but arrogant warrior, whose reckless actions, the revival of the ancient war in Asgard. The Torah is sent into exile to the Earth, devoid of power, and observance of ordinary people, as punishment ...", Genre = "Fantasy", Name = "Thor", PictureUrl = "https://media.kg-portal.ru/movies/t/thor/posters/thor_7.jpg", Producer = "Kevin Feige", Rating = 0m, Year = 2011 },
                        new { Id = 2, Country = "France", Description = "Yesterday she was just a sexy blonde, and today is the most dangerous and deadly creature on the planet with supernatural abilities and intelligence. The fact that recently the best minds of the world have considered fantastic theories, it has become a reality. And now with production, it will become a hunter. Her name is Lucy...", Genre = "Thriller", Name = "Lucy", PictureUrl = "http://lostfilm.info/images/poster/545/5447501.jpg", Producer = "Virginie Besson-Silla", Rating = 0m, Year = 2014 },
                        new { Id = 3, Country = "UK", Description = "This film tells about a man who, after awakening from a coma, discovers that his personality is appropriated to another, and understands that no one, even his own wife, believes him. And then, with the help of an unknown young woman-taxi driver, the hero rushes to prove who he is.", Genre = "Thriller", Name = "Unknown", PictureUrl = "https://www.movieposter.com/posters/archive/main/119/MPW-59897", Producer = "Joel Silver", Rating = 0m, Year = 2011 },
                        new { Id = 4, Country = "USA", Description = "Raging after an unsuccessful attempt to sell drugs, self-taught lawyer Mike Ross, posing as a graduate of Harvard, gets to interview one of the best lawyers for New York deals, Harvey Spectrum.", Genre = "Drama", Name = "Suits", PictureUrl = "https://st.kp.yandex.net/im/poster/2/4/0/kinopoisk.ru-Suits-2405451.jpg", Producer = "Gene Klein", Rating = 0m, Year = 2011 },
                        new { Id = 5, Country = "USA", Description = "A few months after the murder of the daughter of Mildred Hayes, the criminals were never found. The desperate woman decides to take a bold step, renting three billboards at the entrance to the city with a message to the authoritative head of the police, William Willoughby. When the deputy sheriff, an infantile mama's son with a violent inclination, officer Dixon is involved in the situation, the struggle between Mildred and the city authorities is only aggravated.", Genre = "Drama", Name = "Three Billboards Outside Ebbing, Missouri", PictureUrl = "https://fanart.tv/fanart/movies/359940/movieposter/three-billboards-outside-ebbing-missouri-5a84165c374d4.jpg", Producer = "Martin McDonagh", Rating = 0m, Year = 2017 },
                        new { Id = 6, Country = "Sweden", Description = "Who is he, this Uwe? Aging thorough grumbler, reaching neighbors with endless trailers. He falls into a rage at the sight of a garbage or an improperly standing machine. And the light is on what light stands a frivolous family of new settlers, in which the father and nail can not drive. But despite all of the above, Uwe can do everything: masterfully cram his saab between the porch and the mailbox, repair the battery, puncture the discount from the very tight-fisted shopkeeper.", Genre = "Drama", Name = "The second life of Uwe", PictureUrl = "http://cinecinema.org/uploads/posts/2016-07/1469737425_en-man-som-heter-ove.jpg", Producer = "Hannes Holm", Rating = 0m, Year = 2015 }
                    );
                });

            modelBuilder.Entity("task4.DAL.Entities.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("MovieId");

                    b.Property<string>("pictureUrl");

                    b.HasKey("Id");

                    b.HasIndex("MovieId");

                    b.ToTable("Photos");

                    b.HasData(
                        new { Id = 1, MovieId = 1, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/48244/208943.jpg" },
                        new { Id = 2, MovieId = 1, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/48244/572581.jpg" },
                        new { Id = 3, MovieId = 1, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/48244/208942.jpg" },
                        new { Id = 4, MovieId = 1, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/48244/208940.jpg" },
                        new { Id = 5, MovieId = 2, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/108477/739108.jpg" },
                        new { Id = 6, MovieId = 2, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/108477/739110.jpg" },
                        new { Id = 7, MovieId = 2, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/108477/739111.jpg" },
                        new { Id = 8, MovieId = 2, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/108477/739113.jpg" },
                        new { Id = 9, MovieId = 3, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/91794/190675.jpg" },
                        new { Id = 10, MovieId = 3, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/91794/190674.jpg" },
                        new { Id = 11, MovieId = 3, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/91794/190673.jpg" },
                        new { Id = 12, MovieId = 3, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/91794/190670.jpg" },
                        new { Id = 13, MovieId = 4, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/96533/245756.jpg" },
                        new { Id = 14, MovieId = 4, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/96533/554509.jpg" },
                        new { Id = 15, MovieId = 4, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/96533/554512.jpg" },
                        new { Id = 16, MovieId = 4, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/96533/554510.jpg" },
                        new { Id = 17, MovieId = 5, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/125987/751751.jpg" },
                        new { Id = 18, MovieId = 5, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/125987/751750.jpg" },
                        new { Id = 19, MovieId = 5, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/125987/751752.jpg" },
                        new { Id = 20, MovieId = 5, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/125987/751749.jpg" },
                        new { Id = 21, MovieId = 6, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/120115/665900.jpg" },
                        new { Id = 22, MovieId = 6, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/120115/665899.jpg" },
                        new { Id = 23, MovieId = 6, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/120115/665898.jpg" },
                        new { Id = 24, MovieId = 6, pictureUrl = "https://www.kino-teatr.ru/movie/kadr/120115/665897.jpg" }
                    );
                });

            modelBuilder.Entity("task4.DAL.Entities.Rating", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("MovieId");

                    b.Property<int?>("UserId");

                    b.Property<decimal>("Value");

                    b.HasKey("Id");

                    b.HasIndex("MovieId");

                    b.HasIndex("UserId");

                    b.ToTable("Ratings");
                });

            modelBuilder.Entity("task4.DAL.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("task4.DAL.Entities.User+Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("task4.DAL.Entities.User+RoleClaim", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("task4.DAL.Entities.User+UserClaim", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("task4.DAL.Entities.User+UserLogin", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<int>("ExpiresIn");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<int>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("task4.DAL.Entities.User+UserRole", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.Property<int?>("RoleId1");

                    b.Property<int?>("UserId1");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.HasIndex("RoleId1");

                    b.HasIndex("UserId1");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("task4.DAL.Entities.User+UserToken", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("task4.DAL.Entities.Comment", b =>
                {
                    b.HasOne("task4.DAL.Entities.Movie", "Movie")
                        .WithMany("Comments")
                        .HasForeignKey("MovieId");

                    b.HasOne("task4.DAL.Entities.User", "User")
                        .WithMany("Comments")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("task4.DAL.Entities.Photo", b =>
                {
                    b.HasOne("task4.DAL.Entities.Movie", "Movie")
                        .WithMany("Photos")
                        .HasForeignKey("MovieId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("task4.DAL.Entities.Rating", b =>
                {
                    b.HasOne("task4.DAL.Entities.Movie", "Movie")
                        .WithMany("Ratings")
                        .HasForeignKey("MovieId");

                    b.HasOne("task4.DAL.Entities.User", "User")
                        .WithMany("Ratings")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("task4.DAL.Entities.User+RoleClaim", b =>
                {
                    b.HasOne("task4.DAL.Entities.User+Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("task4.DAL.Entities.User+UserClaim", b =>
                {
                    b.HasOne("task4.DAL.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("task4.DAL.Entities.User+UserLogin", b =>
                {
                    b.HasOne("task4.DAL.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("task4.DAL.Entities.User+UserRole", b =>
                {
                    b.HasOne("task4.DAL.Entities.User+Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("task4.DAL.Entities.User+Role", "Role")
                        .WithMany()
                        .HasForeignKey("RoleId1");

                    b.HasOne("task4.DAL.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("task4.DAL.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId1");
                });

            modelBuilder.Entity("task4.DAL.Entities.User+UserToken", b =>
                {
                    b.HasOne("task4.DAL.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
