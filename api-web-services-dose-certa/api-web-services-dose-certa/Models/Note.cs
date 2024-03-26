using Microsoft.Extensions.Logging;
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

        public DateTime CreationDate { get; set; } = DateTime.Now;

        /*
        private User _user;
        private User _agent;

        
        public virtual User User
        {
            get
            {
                if (_user == null)
                {
                    _user = await _noteRepository.GetUserAsync(UserId, "Paciente");
                }

                return _user;
            }
            set
            {
                _user = value;
            }
        }

        public virtual User Agent
        {
            get
            {
                if (_agent == null)
                {
                    _agent = await _noteRepository.GetUserAsync(AgentId, "Agente");
                }

                return _agent;
            }
            set
            {
                _agent = value;
            }
        }
        */
    }
}
