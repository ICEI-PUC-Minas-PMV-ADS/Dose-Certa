using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using api_web_services_dose_certa.Models;
using api_web_services_dose_certa.Services;

namespace api_web_services_dose_certa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        private readonly INotificationsService _notificationsService;

        public NotificationsController(INotificationsService notificationsService)
        {
            _notificationsService = notificationsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Notifications>>> GetNotifications()
        {
            return await _notificationsService.GetNotificationsAsync();
        }

        [HttpGet("{id:length(24)}", Name = "GetNotifications")]
        public async Task<ActionResult<Notifications>> GetNotificationsById(string id)
        {
            var notifications = await _notificationsService.GetNotificationsByIdAsync(id);

            if (notifications == null)
            {
                return NotFound();
            }

            return notifications;
        }

        [HttpPost]
        public async Task<ActionResult<Notifications>> CreateNotifications(Notifications notifications)
        {
            await _notificationsService.CreateNotificationsAsync(notifications);

            return CreatedAtRoute("GetNotifications", new { id = notifications.Id?.ToString() }, notifications);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> UpdateNotification(string id, Notifications notificationsIn)
        {
            var notifications = await _notificationsService.GetNotificationsByIdAsync(id);

            if (notifications == null)
            {
                return NotFound();
            }

            await _notificationsService.UpdateNotificationsAsync(id, notificationsIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> DeleteNotifications(string id)
        {
            var notifications = await _notificationsService.GetNotificationsByIdAsync(id);

            if (notifications == null)
            {
                return NotFound();
            }

            await _notificationsService.DeleteNotificationsAsync(id);

            return NoContent();
        }
    }
}
