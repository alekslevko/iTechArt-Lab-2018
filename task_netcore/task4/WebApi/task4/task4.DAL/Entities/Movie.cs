using System.Collections.Generic;

namespace task4.DAL.Entities
{
    public class Movie
    {
        public int MovieId { get; set; }

        public string Name { get; set; }

        public string Country { get; set; }

        public int Year { get; set; }

        public string Genre { get; set; }

        public string PictureUrl { get; set; }

        public decimal Rating { get; set; }

        public string Producer { get; set; }

        public string Description { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<Photo> Photos { get; set; }

        public virtual ICollection<Rating> Ratings { get; set; }
    }
}