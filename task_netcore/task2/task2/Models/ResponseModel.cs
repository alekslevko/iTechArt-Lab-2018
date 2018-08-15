using System.Collections.Generic;

namespace task2.Models
{
    public class ResponseModel
    {
        public int Count { get; set; }

        public List<Starship> Results { get; set; }
    }
}