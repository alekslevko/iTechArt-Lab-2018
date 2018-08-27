using System.ComponentModel.DataAnnotations;

namespace task4.WEB.Models
{
    public class AccountViewModel
    {
        [Required]
        [Display(Name = "Username")]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}
