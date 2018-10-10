using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using task4.BLL.Interfaces;
using task4.BLL.Services;
using task4.DAL.EF;
using task4.DAL.Entities;
using task4.DAL.Interfaces;
using task4.DAL.Repositories;
using task4.WEB.SignalR;
using static task4.DAL.Entities.User;

namespace task4.WEB
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddDefaultTokenProviders();

            services.AddTransient<IMovieService, MovieService>();

            services.AddTransient<IPhotoService, PhotoService>();

            services.AddTransient<IAccountService, AccountService>();

            services.AddTransient<ICommentService, CommentService>();

            services.AddTransient<IRatingService, RatingService>();

            services.AddTransient<IUnitOfWork, UnitOfWork>();

            services.AddSignalR();

            services.AddMvc();

            services.AddCors();

            services.AddAutoMapper();            

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(cfg =>
                {
                    cfg.RequireHttpsMetadata = false;
                    cfg.SaveToken = true;
                    cfg.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = Configuration["JwtIssuer"],
                        ValidateAudience = true,
                        ValidAudience = Configuration["JwtIssuer"],
                        ValidateLifetime = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtKey"])),
                        ValidateIssuerSigningKey = true
                    };
                });

            return services.BuildServiceProvider();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().AllowCredentials());
            app.UseAuthentication();
            app.UseSignalR(route =>
            {
                route.MapHub<CommentHub>("/comment");
            });
            app.UseMvc();
        }
    }
}
