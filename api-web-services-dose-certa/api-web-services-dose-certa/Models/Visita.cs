using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations.Schema;

namespace APIDoseCerta.Models
{
    public class Visita
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string Observacoes { get; set; }
        public int? IdUsuarioPaciente { get; set; }

        [NotMapped]
        public string? FormattedDate => Date.ToString("dd/MM/yyyy");
    }

}
