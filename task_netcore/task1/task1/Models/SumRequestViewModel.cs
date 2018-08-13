using System;
using System.ComponentModel.DataAnnotations;

namespace task1.Models
{
    public class SumRequestViewModel
    {
        [Required(ErrorMessage = "Параметр обязательный")]
        [Range(1, Int32.MaxValue, ErrorMessage = "Параметр должен быть положительным")]
        public int? A { get; set; }

        [Required(ErrorMessage = "Параметр обязательный")]
        [Range(Int32.MinValue, -1, ErrorMessage ="Параметр должен быть отрицательным")]
        public int? B { get; set; }
    }
}
