using System.ComponentModel.DataAnnotations;

namespace task4.WEB.Models
{
    public class CommentViewModel
    {
        [Required]
        public string Message { get; set; }

        [Required]
        public int MovieId { get; set; }
    }
}
