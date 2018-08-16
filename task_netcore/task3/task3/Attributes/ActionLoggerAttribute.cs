using Microsoft.AspNetCore.Mvc.Filters;
using task3.Interfaces;

namespace task3.Attributes
{
    public class ActionLoggerAttribute: ActionFilterAttribute
    {
        private readonly IActionLogger _logger;

        public ActionLoggerAttribute(IActionLogger logger)
        {
            _logger = logger;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            _logger.Log(context);
        }
    }
}
