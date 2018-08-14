using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using task3.Attributes;
using task3.Data;
using task3.Interfaces;
using task3.Loggers;
using task3.Services;

namespace task3
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().AddXmlDataContractSerializerFormatters();
            string con = "Server=(localdb)\\mssqllocaldb;Database=moviesdbstore;Trusted_Connection=True;MultipleActiveResultSets=true";
            services.AddDbContext<MoviesContext>(options => options.UseSqlServer(con));
            services.AddTransient<IDataService, DataService>();
            services.AddAutoMapper();
            services.AddSingleton<IActionLogger, ActionLogger>();
            services.AddSingleton<ActionLoggerAttribute>();
            services.AddSingleton<ExceptionLoggerAttribute>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
