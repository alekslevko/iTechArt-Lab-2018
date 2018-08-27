using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace task4.DAL.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    MovieId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false),
                    Genre = table.Column<string>(nullable: true),
                    PictureUrl = table.Column<string>(nullable: true),
                    Rating = table.Column<decimal>(nullable: false),
                    Producer = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.MovieId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    CommentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Message = table.Column<string>(nullable: true),
                    MovieId = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    Date = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.CommentId);
                    table.ForeignKey(
                        name: "FK_Comments_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "MovieId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Comments_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    PhotoId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    pictureUrl = table.Column<string>(nullable: true),
                    MovieId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.PhotoId);
                    table.ForeignKey(
                        name: "FK_Photos_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "MovieId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Ratings",
                columns: table => new
                {
                    RatingId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Value = table.Column<decimal>(nullable: false),
                    MovieId = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ratings", x => x.RatingId);
                    table.ForeignKey(
                        name: "FK_Ratings_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "MovieId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Ratings_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "MovieId", "Country", "Description", "Genre", "Name", "PictureUrl", "Producer", "Rating", "Year" },
                values: new object[,]
                {
                    { 1, "USA", "An epic adventure takes place, both on our planet, and in the fictional Kingdom of the Gods of Asgard. In the center of history is the Mighty Thor, a strong but arrogant warrior, whose reckless actions, the revival of the ancient war in Asgard. The Torah is sent into exile to the Earth, devoid of power, and observance of ordinary people, as punishment ...", "Fantasy", "Thor", "https://media.kg-portal.ru/movies/t/thor/posters/thor_7.jpg", "Kevin Feige", 0m, 2011 },
                    { 2, "France", "Yesterday she was just a sexy blonde, and today is the most dangerous and deadly creature on the planet with supernatural abilities and intelligence. The fact that recently the best minds of the world have considered fantastic theories, it has become a reality. And now with production, it will become a hunter. Her name is Lucy...", "Thriller", "Lucy", "http://lostfilm.info/images/poster/545/5447501.jpg", "Virginie Besson-Silla", 0m, 2014 },
                    { 3, "UK", "This film tells about a man who, after awakening from a coma, discovers that his personality is appropriated to another, and understands that no one, even his own wife, believes him. And then, with the help of an unknown young woman-taxi driver, the hero rushes to prove who he is.", "Thriller", "Unknown", "https://www.movieposter.com/posters/archive/main/119/MPW-59897", "Joel Silver", 0m, 2011 },
                    { 4, "USA", "Raging after an unsuccessful attempt to sell drugs, self-taught lawyer Mike Ross, posing as a graduate of Harvard, gets to interview one of the best lawyers for New York deals, Harvey Spectrum.", "Drama", "Suits", "https://st.kp.yandex.net/im/poster/2/4/0/kinopoisk.ru-Suits-2405451.jpg", "Gene Klein", 0m, 2011 },
                    { 5, "USA", "A few months after the murder of the daughter of Mildred Hayes, the criminals were never found. The desperate woman decides to take a bold step, renting three billboards at the entrance to the city with a message to the authoritative head of the police, William Willoughby. When the deputy sheriff, an infantile mama's son with a violent inclination, officer Dixon is involved in the situation, the struggle between Mildred and the city authorities is only aggravated.", "Drama", "Three Billboards Outside Ebbing, Missouri", "https://fanart.tv/fanart/movies/359940/movieposter/three-billboards-outside-ebbing-missouri-5a84165c374d4.jpg", "Martin McDonagh", 0m, 2017 },
                    { 6, "Sweden", "Who is he, this Uwe? Aging thorough grumbler, reaching neighbors with endless trailers. He falls into a rage at the sight of a garbage or an improperly standing machine. And the light is on what light stands a frivolous family of new settlers, in which the father and nail can not drive. But despite all of the above, Uwe can do everything: masterfully cram his saab between the porch and the mailbox, repair the battery, puncture the discount from the very tight-fisted shopkeeper.", "Drama", "The second life of Uwe", "http://cinecinema.org/uploads/posts/2016-07/1469737425_en-man-som-heter-ove.jpg", "Hannes Holm", 0m, 2015 }
                });

            migrationBuilder.InsertData(
                table: "Photos",
                columns: new[] { "PhotoId", "MovieId", "pictureUrl" },
                values: new object[,]
                {
                    { 1, 1, "https://www.kino-teatr.ru/movie/kadr/48244/208943.jpg" },
                    { 22, 6, "https://www.kino-teatr.ru/movie/kadr/120115/665899.jpg" },
                    { 21, 6, "https://www.kino-teatr.ru/movie/kadr/120115/665900.jpg" },
                    { 20, 5, "https://www.kino-teatr.ru/movie/kadr/125987/751749.jpg" },
                    { 19, 5, "https://www.kino-teatr.ru/movie/kadr/125987/751752.jpg" },
                    { 18, 5, "https://www.kino-teatr.ru/movie/kadr/125987/751750.jpg" },
                    { 17, 5, "https://www.kino-teatr.ru/movie/kadr/125987/751751.jpg" },
                    { 16, 4, "https://www.kino-teatr.ru/movie/kadr/96533/554510.jpg" },
                    { 15, 4, "https://www.kino-teatr.ru/movie/kadr/96533/554512.jpg" },
                    { 14, 4, "https://www.kino-teatr.ru/movie/kadr/96533/554509.jpg" },
                    { 13, 4, "https://www.kino-teatr.ru/movie/kadr/96533/245756.jpg" },
                    { 12, 3, "https://www.kino-teatr.ru/movie/kadr/91794/190670.jpg" },
                    { 11, 3, "https://www.kino-teatr.ru/movie/kadr/91794/190673.jpg" },
                    { 10, 3, "https://www.kino-teatr.ru/movie/kadr/91794/190674.jpg" },
                    { 9, 3, "https://www.kino-teatr.ru/movie/kadr/91794/190675.jpg" },
                    { 8, 2, "https://www.kino-teatr.ru/movie/kadr/108477/739113.jpg" },
                    { 7, 2, "https://www.kino-teatr.ru/movie/kadr/108477/739111.jpg" },
                    { 6, 2, "https://www.kino-teatr.ru/movie/kadr/108477/739110.jpg" },
                    { 5, 2, "https://www.kino-teatr.ru/movie/kadr/108477/739108.jpg" },
                    { 4, 1, "https://www.kino-teatr.ru/movie/kadr/48244/208940.jpg" },
                    { 3, 1, "https://www.kino-teatr.ru/movie/kadr/48244/208942.jpg" },
                    { 2, 1, "https://www.kino-teatr.ru/movie/kadr/48244/572581.jpg" },
                    { 23, 6, "https://www.kino-teatr.ru/movie/kadr/120115/665898.jpg" },
                    { 24, 6, "https://www.kino-teatr.ru/movie/kadr/120115/665897.jpg" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_MovieId",
                table: "Comments",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_UserId",
                table: "Comments",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Photos_MovieId",
                table: "Photos",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_MovieId",
                table: "Ratings",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_UserId",
                table: "Ratings",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.DropTable(
                name: "Ratings");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Movies");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
