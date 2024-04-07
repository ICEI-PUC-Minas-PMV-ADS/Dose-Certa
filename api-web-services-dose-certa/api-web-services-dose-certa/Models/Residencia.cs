using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace APIDoseCerta.Models
{
    public class Residencia
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string Rua { get; set; } = null!;

        public string Numero { get; set; } = null!;

        public string Complemento { get; set; } = null!;

        public string Cidade { get; set; } = null!;
        
        public string Bairro { get; set; } = null!;

        public int? IdUsuarioAgente { get; set; }
    }

}
