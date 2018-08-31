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
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public PhotoService(IUnitOfWork uow, IMapper mapper)
        {
            _unitOfWork = uow;
            _mapper = mapper;
        }

        public IList<PhotoModel> GetPhotosByMovie(int movieId)
        {
            var photos = _unitOfWork.PhotoRepository.GetQueryableAll().Where(p => p.Movie.Id == movieId).ToList();
            var photosModel = _mapper.Map<IList<Photo>, IList<PhotoModel>>(photos);

            return photosModel;
        }
    }
}
