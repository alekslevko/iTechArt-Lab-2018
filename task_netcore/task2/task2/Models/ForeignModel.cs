using System.Collections.Generic;

namespace task2.Models
{
    public class ForeignModel
    {
        public string Next { get; set; }
        public string Previous { get; set; }
        public int Count { get; set; }
        public List<Starship> Results { get; set; }
        public ForeignModel()
        {
            Results = new List<Starship>();
        }
    }
}
