using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using task3.Data.Entities;

namespace task3.Interfaces
{
    public interface IDataService
    {
        IQueryable<Movie> GetData();

        Movie GetDataById(int id);

        Movie AddData(Movie movie);

        Movie UpdateData(Movie movie);

        Movie DeleteData(int id);
    }
}
