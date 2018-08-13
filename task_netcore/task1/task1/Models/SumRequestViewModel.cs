using System;
using System.ComponentModel.DataAnnotations;

namespace task1.Models
{
    public class SumRequestViewModel
    {
        [Required(ErrorMessage = "Parameter is required")]
        [Range(1, Int32.MaxValue, ErrorMessage = "Parameter should be a positive")]
        public int? A { get; set; }

        [Required(ErrorMessage = "Parameter is required")]
        [Range(Int32.MinValue, -1, ErrorMessage = "Parameter should be a negative")]
        public int? B { get; set; }
    }
}
