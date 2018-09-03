using System;
using System.Collections.Generic;
using System.Text;

namespace task4.BLL.Models
{
    public class AccountResultModel
    {
        public string Token { get; set; }

        public List<string> Errors { get; set; }
    }
}
