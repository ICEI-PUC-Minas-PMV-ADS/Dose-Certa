using api_web_services_dose_certa.Controllers;
using api_web_services_dose_certa.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;
using APIDoseCerta.Models;


namespace Tests
{
    public class UsersControllerTest
    {
        private readonly UsersController _controller;
        private readonly Mock<UserService> _userServiceMock;

        public UsersControllerTest()
        {
            _userServiceMock = new Mock<UserService>();
            _controller = new UsersController(_userServiceMock.Object);
        }

        [Fact]
        public async Task GetUsers_ReturnsListOfUsers()
        {
            // Arrange
            var users = new List<User> { new User { Id = 1, Name = "John" }, new User { Id = 2, Name = "Jane" } };
            _userServiceMock.Setup(service => service.GetAllUsers()).ReturnsAsync(users);

            // Act
            var result = await _controller.GetUsers();

            // Assert
            var okResult = Assert.IsType<ActionResult<List<User>>>(result);
            var model = Assert.IsAssignableFrom<List<User>>(okResult.Value);
            Assert.Equal(users.Count, model.Count);
        }

        [Fact]
        public async Task GetById_ExistingId_ReturnsUser()
        {
            // Arrange
            var user = new User { Id = 1, Name = "John" };
            _userServiceMock.Setup(service => service.GetById(user.Id)).ReturnsAsync(user);

            // Act
            var result = await _controller.GetById(user.Id);

            // Assert
            var okResult = Assert.IsType<ActionResult<User>>(result);
            var model = Assert.IsAssignableFrom<User>(okResult.Value);
            Assert.Equal(user.Id, model.Id);
            Assert.Equal(user.Name, model.Name);
        }

        [Fact]
        public async Task GetById_NonExistingId_ReturnsNotFound()
        {
            // Arrange
            var nonExistingId = 999;
            _userServiceMock.Setup(service => service.GetById(nonExistingId)).ReturnsAsync((User)null);

            // Act
            var result = await _controller.GetById(nonExistingId);

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }
    }
}