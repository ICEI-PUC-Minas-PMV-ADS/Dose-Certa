using APIDoseCerta.Models;
using api_web_services_dose_certa.Services;
using Microsoft.AspNetCore.Mvc;


namespace api_web_services_dose_certa.Controllers
{
    [Route("api/chat")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly MessageService _messageService;

        public ChatController(UserService userService, MessageService messageService)
        {
            _userService = userService;
            _messageService = messageService;
        }

        [HttpPost("messages")]
        public async Task<ActionResult<Message>> CreateMessage(Message message)
        {
            var createdMessage = await _messageService.CreateMessageAsync(message);
            return Ok(createdMessage);
        }

        [HttpGet("users/{userId}/messages")]
        public async Task<ActionResult<List<Message>>> GetMessagesByUserId(int userId)
        {
            var messages = await _messageService.GetMessagesByUserIdAsync(userId);
            return Ok(messages);
        }

        [HttpGet("messages")]
        public async Task<ActionResult<List<Message>>> GetAllMessages()
        {
            var messages = await _messageService.GetAllMessagesAsync();
            return Ok(messages);
        }

    }
}