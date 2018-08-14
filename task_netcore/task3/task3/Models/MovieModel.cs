using System.ComponentModel.DataAnnotations;


namespace task3.Models
{
    public class MovieModel
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public string Producer { get; set; }
    }
}
