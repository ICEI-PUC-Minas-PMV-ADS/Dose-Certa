using api_web_services_dose_certa.Controllers;
using api_web_services_dose_certa.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;
using APIDoseCerta.Models;

namespace Tests
{
    public class ChatControllerTest
    {
        private readonly ChatController _controller;
        private readonly Mock<UserService> _userServiceMock;
        private readonly Mock<MessageService> _messageServiceMock;

        public ChatControllerTest()
        {
            _userServiceMock = new Mock<UserService>();
            _messageServiceMock = new Mock<MessageService>();
            _controller = new ChatController(_userServiceMock.Object, _messageServiceMock.Object);
        }

        [Fact]
        public async Task CreateMessage_ValidMessage_ReturnsOkResult()
        {
            // Arrange
            var message = new Message { MessageId = 1, Content = "Hello", SenderId = 1 };
            _messageServiceMock.Setup(service => service.CreateMessageAsync(message)).ReturnsAsync(message);

            // Act
            var result = await _controller.CreateMessage(message);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var createdMessage = Assert.IsAssignableFrom<Message>(okResult.Value);
            Assert.Equal(message.MessageId, createdMessage.MessageId);
            Assert.Equal(message.Content, createdMessage.Content);
            Assert.Equal(message.SenderId, createdMessage.SenderId);
        }

        [Fact]
        public async Task GetMessagesByUserId_ExistingUserId_ReturnsListOfMessages()
        {
            // Arrange
            var userId = 1;
            var messages = new List<Message> { new Message { MessageId = 1, Content = "Hello", SenderId = userId }, new Message { MessageId = 2, Content = "Hi", SenderId = userId } };
            _messageServiceMock.Setup(service => service.GetMessagesByUserIdAsync(userId)).ReturnsAsync(messages);

            // Act
            var result = await _controller.GetMessagesByUserId(userId);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var messageList = Assert.IsAssignableFrom<List<Message>>(okResult.Value);
            Assert.Equal(messages.Count, messageList.Count);
        }

        [Fact]
        public async Task GetAllMessages_ReturnsListOfMessages()
        {
            // Arrange
            var messages = new List<Message> { new Message { MessageId = 1, Content = "Hello", SenderId = 1 }, new Message { MessageId = 2, Content = "Hi", SenderId = 2 } };
            _messageServiceMock.Setup(service => service.GetAllMessagesAsync()).ReturnsAsync(messages);

            // Act
            var result = await _controller.GetAllMessages();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var messageList = Assert.IsAssignableFrom<List<Message>>(okResult.Value);
            Assert.Equal(messages.Count, messageList.Count);
        }
    }
}