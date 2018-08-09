using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace task1.Models
{
    public class SumModel
    {
        [Required(ErrorMessage = "Параметр обязательный")]
        [Range(1, Double.MaxValue, ErrorMessage = "Параметр должен быть положительным")]
        public int? A { get; set; }

        [Required(ErrorMessage = "Параметр обязательный")]
        [Range(Double.MinValue, -1, ErrorMessage ="Параметр должен быть отрицательным")]
        public int? B { get; set; }

        public int Sum { get; set; }
    }
}
