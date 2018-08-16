using Microsoft.AspNetCore.Mvc.Filters;
using task3.Interfaces;

namespace task3.Attributes
{
    public class ExceptionLoggerAttribute: ExceptionFilterAttribute
    {
        private readonly IActionLogger _logger;

        public ExceptionLoggerAttribute(IActionLogger logger)
        {
            _logger = logger;
        }

        public override void OnException(ExceptionContext context)
        {
            _logger.Log(context);
            context.ExceptionHandled = true;
        }
    }
}