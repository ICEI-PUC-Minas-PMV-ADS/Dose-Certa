using System.ComponentModel.DataAnnotations;

namespace APIDoseCerta.Models
{
    public class Medicamento
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public String Dosagem { get; set; }
        [Required]
        

    }
}
