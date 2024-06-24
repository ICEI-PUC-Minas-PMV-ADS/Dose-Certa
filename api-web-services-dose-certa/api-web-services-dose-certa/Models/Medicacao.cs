using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace APIDoseCerta.Models
{
    public class Medicacao
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public DateTime DataInicio { get; set; }

        public DateTime DataTermino { get; set; }

        public string Observacao { get; set; }

        public int? IdUsuarioPaciente { get; set; }

        public List<string> Remedios { get; set; }
        
        public string Status { get; set; }
    }

}
