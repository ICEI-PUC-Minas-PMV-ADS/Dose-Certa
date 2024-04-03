using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


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


        /*
        public int IdUsuarioPaciente { get; set; }

        public int IdUsuarioAgente { get; set; }


        public User? User { get; set; }
        */

    }
}
