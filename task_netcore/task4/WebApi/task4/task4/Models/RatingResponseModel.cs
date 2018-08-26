using System.Collections.Generic;

namespace task4.Models
{
    public class RatingResponseModel
    {
        public decimal Value { get; set; }

        public bool AlreadyRated { get; set; }

        public List<string> Errors { get; set; }
    }
}
