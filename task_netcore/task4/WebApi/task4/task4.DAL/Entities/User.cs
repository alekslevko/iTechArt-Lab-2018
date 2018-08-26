using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace task4.DAL.Entities
{
    public class User: IdentityUser
    {
        public ICollection<Rating> Ratings { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}
