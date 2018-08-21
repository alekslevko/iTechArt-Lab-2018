using System.ComponentModel.DataAnnotations;

namespace task4.Models
{
    public class MovieInfoModel
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        public string Genre { get; set; }

        [Required]
        public string PictureUrl { get; set; }

        public decimal Rating { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Producer { get; set; }
    }
}
