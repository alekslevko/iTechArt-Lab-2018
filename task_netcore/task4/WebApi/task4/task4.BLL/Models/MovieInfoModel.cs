using System.Collections.Generic;

namespace task4.BLL.Models
{
    public class MovieInfoModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Country { get; set; }

        public int Year { get; set; }

        public string Genre { get; set; }

        public string PictureUrl { get; set; }

        public decimal Rating { get; set; }

        public string Description { get; set; }

        public string Producer { get; set; }

        public ICollection<PhotoModel> Photos { get; set; } 
    }
}
