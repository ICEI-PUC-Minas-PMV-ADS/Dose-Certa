using System.ComponentModel.DataAnnotations;

namespace APIDoseCerta.Models
{
    public class Medicacao
    {
        public int Id { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataTermino { get; set; }
        public string Observacao { get; set; }
    }

}
