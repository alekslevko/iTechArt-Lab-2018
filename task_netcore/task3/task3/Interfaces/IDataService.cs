using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using task3.Data.Entities;

namespace task3.Interfaces
{
    public interface IDataService
    {
        IEnumerable<Movie> GetData();

        Movie GetDataById(int id);

        Movie AddData([FromBody]Movie movie);

        Movie UpdateData([FromBody]Movie movie);

        Movie DeleteData(int id);
    }
}
