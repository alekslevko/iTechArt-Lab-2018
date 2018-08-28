using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using task4.BLL.Interfaces;
using task4.BLL.Models;
using task4.DAL.Entities;
using task4.DAL.Interfaces;

namespace task4.BLL.Services
{
    public class PhotoService: IPhotoService
    {
        private readonly IUnitOfWork dataBase;
        private readonly IMapper _mapper;

        public PhotoService(IUnitOfWork uow, IMapper mapper)
        {
            dataBase = uow;
            _mapper = mapper;
        }

        public IList<PhotoModel> GetPhotos(int movieId)
        {
            var photos = dataBase.PhotoRepository.GetQueryableAll().Where(p => p.MovieId == movieId).ToList();
            var photosModel = _mapper.Map<IList<Photo>, IList<PhotoModel>>(photos);

            return photosModel;
        }
    }
}
