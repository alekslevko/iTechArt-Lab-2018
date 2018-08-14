using Microsoft.AspNetCore.Mvc.Filters;
using task3.Interfaces;

namespace task3.Attributes
{
    public class ExceptionLoggerAttribute: ExceptionFilterAttribute
    {
        IActionLogger logger;
        public ExceptionLoggerAttribute(IActionLogger logger)
        {
            this.logger = logger;
        }

        public override void OnException(ExceptionContext context)
        {
            logger.Log(context);
            context.ExceptionHandled = true;
        }
    }
}