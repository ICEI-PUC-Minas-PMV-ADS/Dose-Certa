using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api_web_services_dose_certa
{
    public class Notifications
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string? Message { get; set; }

        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime DateSent { get; set; }

        public bool Read { get; set; }

        public string? RecipientUserId { get; set; }
    }
}
