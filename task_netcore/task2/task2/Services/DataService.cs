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
            ForeignModel response = new ForeignModel();

            using (WebClient client = new WebClient())
            {
                var content = client.DownloadString(url);
                response = JsonConvert.DeserializeObject<ForeignModel>(content);

                Counter(response);
            }

            return _mapper.Map<ForeignModel, ResponseModel>(response);
        }

        public async Task<ResponseModel> GetInfoAsync()
        {
            ForeignModel response = new ForeignModel();

            using (WebClient client = new WebClient())
            {
                while (url != null)
                {
                    var nextContent = await client.DownloadStringTaskAsync(url);
                    ForeignModel nextInfo = JsonConvert.DeserializeObject<ForeignModel>(nextContent);
                    url = nextInfo.Next;
                    response.Results.AddRange(nextInfo.Results);
                }

                Counter(response);

                response.Count = response.Results.Count;
            }

            return _mapper.Map<ForeignModel, ResponseModel>(response);
        }

        private void Counter(ForeignModel model)
        {
            for(int i =0; i< model.Results.Count; i++)
            {
                model.Results[i].Index = i + 1;
            }
        }
    }
}