using api_web_services_dose_certa.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using api_web_services_dose_certa.Services;

namespace api_web_services_dose_certa.Services
{
    public class NotificationsService : INotificationsService
    {
        private readonly IMongoCollection<Notifications> _notificationsCollection;

        public NotificationsService(IOptions<DoseCertaDatabaseSettings> databaseSettings)
        {
            var client = new MongoClient(databaseSettings.Value.ConnectionString);
            var database = client.GetDatabase(databaseSettings.Value.DatabaseName);
            _notificationsCollection = database.GetCollection<Notifications>(databaseSettings.Value.NotificationCollectionName);
        }

        public async Task<List<Notifications>> GetNotificationsAsync() =>
            await _notificationsCollection.Find(_ => true).ToListAsync();

        public async Task<Notifications> GetNotificationsByIdAsync(string id) =>
            await _notificationsCollection.Find(notifications => notifications.Id == id).FirstOrDefaultAsync();

        public async Task CreateNotificationsAsync(Notifications notifications) =>
            await _notificationsCollection.InsertOneAsync(notifications);

        public async Task UpdateNotificationsAsync(string id, Notifications notifications) =>
            await _notificationsCollection.ReplaceOneAsync(n => n.Id == id, notifications);

        public async Task DeleteNotificationsAsync(string id) =>
            await _notificationsCollection.DeleteOneAsync(n => n.Id == id);
    }
}