using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using task3.Interfaces;

namespace task3.Loggers
{
    public class ActionLogger : IActionLogger
    {
        private string fileName;

        public ActionLogger(IConfiguration configuration)
        {
            fileName = configuration["FileName"];
        }

        public void Log(ActionExecutingContext context)
        {
            using (StreamWriter streamWriter = new StreamWriter(fileName, true))
            {
                streamWriter.WriteLine($"Request type: {context.HttpContext.Request.Method}");
                streamWriter.WriteLine($"Action name: {context.ActionDescriptor.DisplayName}");
                streamWriter.WriteLine($"Action time: {DateTime.Now.TimeOfDay}");
                streamWriter.WriteLine("---------------------------------------------------");
            }
        }

        public void Log(ExceptionContext context)
        {
            Exception ex = context.Exception;

            using (StreamWriter streamWriter = new StreamWriter(fileName, true))
            {
                streamWriter.WriteLine($"Exeption message: {ex.Message}");
                streamWriter.WriteLine("---------------------------------------------------");
            }
        }
    }
}