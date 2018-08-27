using AutoMapper;
using task4.BLL.Models;
using task4.WEB.Models;

namespace task4.WEB.Profiles
{
    public class MapperProfile: Profile
    {
        public MapperProfile()
        {
            CreateMap<CommentViewModel, CommentModel>();
            CreateMap<AccountViewModel, AccountModel>();
            CreateMap<RatingViewModel, RatingModel>();
        }
    }
}
