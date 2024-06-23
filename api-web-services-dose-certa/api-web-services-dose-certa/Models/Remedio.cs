using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace APIDoseCerta.Models
{
    public class Remedio
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string Nome { get; set; }

        public string Dosagem { get; set; }

        public string Indicacao { get; set; }

        public string Frequencia { get; set; }

        public string? MedicacaoId { get; set; }
    }
}