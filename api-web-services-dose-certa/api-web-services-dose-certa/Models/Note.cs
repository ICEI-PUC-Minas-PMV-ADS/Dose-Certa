using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations.Schema;


namespace api_web_services_dose_certa.Models
{
    public class Note
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string? Id { get; set; }

        public string Content { get; set; }

        public DateTime CreationDate { get; set; } = DateTime.UtcNow;

        public int? IdUserPaciente { get; set; }

        [NotMapped] // Isso evita que esta propriedade seja mapeada para o banco de dados
        public string? FormattedCreationDate => CreationDate.ToString("dd/MM/yyyy");
       
    }
}
