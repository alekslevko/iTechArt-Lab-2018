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

                for (int i = 0; i < response.Results.Count; i++)
                {
                    response.Results[i].Index = i + 1;
                }
            }

            return _mapper.Map<ForeignModel, ResponseModel>(response);
        }

        public async Task<ResponseModel> GetInfoAsync()
        {
            int index = 0;
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

                for (int i = 0; i < response.Results.Count; i++)
                {
                    index++;
                    response.Results[i].Index = i + 1;
                }

                response.Count = index;
            }

            return _mapper.Map<ForeignModel, ResponseModel>(response);
        }
    }
}