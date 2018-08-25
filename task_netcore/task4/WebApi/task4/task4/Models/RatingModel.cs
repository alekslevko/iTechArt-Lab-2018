using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace task4.Models
{
    public class RatingModel
    {
        [Required]
        public int MovieId { get; set; }

        [Required]
        public decimal Value { get; set; }
    }
}