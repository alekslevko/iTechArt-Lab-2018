using System.Collections.Generic;

namespace task4.BLL.Models
{
    public class MovieInfoModel: MovieModel
    {
        public string Description { get; set; }

        public string Producer { get; set; }

        public ICollection<PhotoModel> Photos { get; set; } 
    }
}
