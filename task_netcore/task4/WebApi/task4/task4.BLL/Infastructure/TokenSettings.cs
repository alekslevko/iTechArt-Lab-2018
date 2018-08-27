using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace task4.BLL.Infastructure
{
    public class TokenSettings
    {
        private const string JwtKey = "SOME_RANDOM_KEY_DO_NOT_SHARE";

        public const string JwtIssuer = "http://yourdomain.com";

        public const int JwtExpireDays = 30;

        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(JwtKey));
        }
    }
}