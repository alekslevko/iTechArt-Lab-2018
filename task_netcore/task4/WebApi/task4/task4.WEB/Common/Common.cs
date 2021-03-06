﻿using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Security.Claims;

namespace task4.WEB.Common
{
    public static class Common
    {
        public static string GetUserIdByHttpContext(this HttpContext context)
        {
            return context.User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.NameIdentifier).Value;
        }
    }
}