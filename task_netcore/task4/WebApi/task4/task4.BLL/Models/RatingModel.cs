using System;
using System.Collections.Generic;
using System.Text;

namespace task4.BLL.Models
{
    public class RatingModel
    {
        public int MovieId { get; set; }

        public decimal Value { get; set; }

        public int UserId { get; set; }
    }
}
