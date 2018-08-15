using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using task3.Attributes;
using task3.Data.Entities;
using task3.Interfaces;
using task3.Models;

namespace task3.Controllers
{
    [ServiceFilter(typeof(ActionLoggerAttribute))]
    [ServiceFilter(typeof(ExceptionLoggerAttribute))]
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly IDataService _dataService;
        private readonly IMapper _mapper;

        public DataController(IDataService dataService, IMapper mapper)
        {
            _dataService = dataService;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return _dataService.GetData();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var movie = _dataService.GetDataById(id);

            if(movie != null)
            {
                return Ok(movie);
            }

            return NotFound();
        }

        [HttpPost]
        public IActionResult Post([FromBody]MovieModel movieModel)
        {
            if(ModelState.IsValid)
            {
                var movie = _mapper.Map<MovieModel, Movie>(movieModel);
                _dataService.AddData(movie);
                return Ok(movie);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put([FromBody]MovieModel movieModel)
        {
            if (ModelState.IsValid)
            {
                var movie = _mapper.Map<MovieModel, Movie>(movieModel);
                _dataService.UpdateData(movie);

                return Ok(movie);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var movie = _dataService.DeleteData(id);

            if (movie != null)
            {
                return Ok(movie);
            }

            return BadRequest();
        }
    }
}