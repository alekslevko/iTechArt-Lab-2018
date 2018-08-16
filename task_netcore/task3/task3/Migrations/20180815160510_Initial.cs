using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace task3.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false),
                    Country = table.Column<string>(nullable: true),
                    Producer = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Country", "Name", "Producer", "Year" },
                values: new object[] { 1, "USA", "Suits", "Gene Klein", 2011 });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Country", "Name", "Producer", "Year" },
                values: new object[] { 2, "USA", "Thor", "Kevin Feige", 2011 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}
