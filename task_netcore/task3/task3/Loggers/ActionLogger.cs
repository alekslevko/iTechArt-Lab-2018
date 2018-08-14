using Microsoft.AspNetCore.Mvc.Filters;
using System;
using task3.Interfaces;

namespace task3.Loggers
{
    public class ActionLogger: IActionLogger
    {
        public void Log(ActionExecutingContext context)
        {
            Console.WriteLine($"Request type: {context.HttpContext.Request.Method}");
            Console.WriteLine($"Action name: {context.ActionDescriptor.DisplayName}");
            Console.WriteLine($"Action time: {DateTime.Now.TimeOfDay}");
            Console.WriteLine("---------------------------------------------------");
        }

        public void Log(ExceptionContext context)
        {
            Exception ex = context.Exception;

            Console.WriteLine($"Exeption message: {ex.Message}");
            Console.WriteLine("---------------------------------------------------");
        }
    }
}
