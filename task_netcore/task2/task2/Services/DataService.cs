using AutoMapper;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Net;
using System.Threading.Tasks;
using task2.Interfaces;
using task2.Models;

namespace task2.Services
{
    public class DataService : IDataService
    {
        private string url;
        private readonly IMapper _mapper;
        public DataService(IMapper mapper, IConfiguration configuration)
        {
            _mapper = mapper;
            url = configuration["url"];
        }

        public ResponseModel GetInfo()
        {
            ForeignModel foreignModel;

            using (var client = new WebClient())
            {
                var content = client.DownloadString(url);
                foreignModel = JsonConvert.DeserializeObject<ForeignModel>(content);
            }

            var responseModel = _mapper.Map<ForeignModel, ResponseModel>(foreignModel);

            SetIndexField(responseModel);

            return responseModel;
        }

        public async Task<ResponseModel> GetInfoAsync()
        {
            var foreignModel = new ForeignModel();

            using (var client = new WebClient())
            {
                while (url != null)
                {
                    var nextContent = await client.DownloadStringTaskAsync(url);
                    ForeignModel nextInfo = JsonConvert.DeserializeObject<ForeignModel>(nextContent);
                    url = nextInfo.Next;
                    foreignModel.Results.AddRange(nextInfo.Results);
                }

                foreignModel.Count = foreignModel.Results.Count;
            }

            var responseModel = _mapper.Map<ForeignModel, ResponseModel>(foreignModel);

            SetIndexField(responseModel);

            return responseModel;
        }

        private void SetIndexField(ResponseModel model)
        {
            for(var i = 0; i< model.Results.Count; i++)
            {
                model.Results[i].Index = i + 1;
            }
        }
    }
}