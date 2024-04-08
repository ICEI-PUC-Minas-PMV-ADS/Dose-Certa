using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace APIDoseCerta.Models
{
    public class Visita
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string Observacoes { get; set; }
        public int IdUsuarioPaciente { get; set; }
        public string IdUsuarioAgente { get; set; }
    }

}
