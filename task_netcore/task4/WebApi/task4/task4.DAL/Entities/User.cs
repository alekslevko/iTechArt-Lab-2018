using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace task4.DAL.Entities
{
    public class User: IdentityUser<int>
    {
        public ICollection<Rating> Ratings { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public class Role : IdentityRole<int>
        {
            public Role()
            {

            }

            public Role(string name) { Name = name; }
        }

        public class UserRole : IdentityUserRole<int>
        {
            public virtual Role Role { get; set; }

            public virtual User User { get; set; }
        }

        public class UserClaim : IdentityUserClaim<int> { }

        public class UserLogin : IdentityUserLogin<int>
        {
            public int ExpiresIn { get; set; }
        }

        public class RoleClaim : IdentityRoleClaim<int> { }

        public class UserToken : IdentityUserToken<int> { }
    }
}