using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_web_services_dose_certa.Models;

namespace api_web_services_dose_certa.Services
{
    public interface INotificationsService
    {
        Task<List<Notifications>> GetNotificationsAsync();
        Task<Notifications> GetNotificationsByIdAsync(string id);
        Task CreateNotificationsAsync(Notifications notifications);
        Task UpdateNotificationsAsync(string id, Notifications notifications);
        Task DeleteNotificationsAsync(string id);
    }
}