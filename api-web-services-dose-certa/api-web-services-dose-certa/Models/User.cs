using System.ComponentModel.DataAnnotations.Schema;

namespace api_web_services_dose_certa.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string UserType { get; set; }
        public int HouseId { get; set; }
    }
}
