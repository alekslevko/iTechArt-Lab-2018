using System.ComponentModel.DataAnnotations;

namespace task4.WEB.Models
{
    public class RatingViewModel
    {
        [Required]
        public int MovieId { get; set; }

        [Required]
        public decimal Value { get; set; }
    }
}
