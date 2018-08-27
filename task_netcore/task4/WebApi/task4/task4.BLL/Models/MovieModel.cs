using System;
using System.Collections.Generic;
using System.Text;

namespace task4.BLL.Models
{
    public class MovieModel
    {
        public int MovieId { get; set; }
   
        public string Name { get; set; }

        public string Country { get; set; }

        public int Year { get; set; }

        public string Genre { get; set; }

        public string PictureUrl { get; set; }

        public decimal Rating { get; set; }
    }
}
