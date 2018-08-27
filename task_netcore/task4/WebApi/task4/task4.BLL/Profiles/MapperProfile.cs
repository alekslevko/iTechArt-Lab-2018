using AutoMapper;
using task4.BLL.Models;
using task4.DAL.Entities;

namespace task4.BLL.Profiles
{
    public class MapperProfile: Profile
    {
        public MapperProfile()
        {
            CreateMap<CommentModel, Comment>();
            CreateMap<Comment, CommentModel>();
            CreateMap<Movie, MovieModel>();
            CreateMap<Movie, MovieInfoModel>();
            CreateMap<Photo, PhotoModel>();
            CreateMap<Rating, RatingResultModel>();
            CreateMap<RatingModel, Rating>();
        }
    }
}
