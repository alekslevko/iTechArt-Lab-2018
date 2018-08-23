using System;
using System.ComponentModel.DataAnnotations;

namespace task4.Models
{
    public class CommentModel
    {
        [Required]
        public string Message { get; set; }

        [Required]
        public int MovieId { get; set; }

        public DateTime Date { get; set; }
    }
}