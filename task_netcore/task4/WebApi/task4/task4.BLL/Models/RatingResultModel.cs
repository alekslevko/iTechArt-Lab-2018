using System;
using System.Collections.Generic;
using System.Text;

namespace task4.BLL.Models
{
    public class RatingResultModel
    {
        public decimal Value { get; set; }

        public bool AlreadyRated { get; set; }

        public List<string> Errors { get; set; }
    }
}
