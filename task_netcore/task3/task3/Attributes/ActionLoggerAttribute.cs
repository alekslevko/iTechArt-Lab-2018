using Microsoft.AspNetCore.Mvc.Filters;
using task3.Interfaces;

namespace task3.Attributes
{
    public class ActionLoggerAttribute: ActionFilterAttribute
    {
        IActionLogger logger;
        public ActionLoggerAttribute(IActionLogger logger)
        {
            this.logger = logger;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            logger.Log(context);
        }
    }
}
