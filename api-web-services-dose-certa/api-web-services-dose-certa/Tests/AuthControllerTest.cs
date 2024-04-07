using api_web_services_dose_certa.Controllers;
using api_web_services_dose_certa.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;
using System.Threading.Tasks;
using APIDoseCerta.Models;
using APIDoseCerta.Dtos;

namespace Tests
{
    public class AuthControllerTest
    {
        private readonly AuthController _controller;
        private readonly Mock<RequestVerifierService> _requestVerifierMock;
        private readonly Mock<AuthenticationService> _authenticationServiceMock;

        public AuthControllerTest()
        {
            _requestVerifierMock = new Mock<RequestVerifierService>();
            _authenticationServiceMock = new Mock<AuthenticationService>();
            _controller = new AuthController(_requestVerifierMock.Object, _authenticationServiceMock.Object);
        }

        [Fact]
        public async Task Login_ValidApiKey_ReturnsOkResultWithToken()
        {
            // Arrange
            var apiKey = "valid-api-key";
            var userLoginDto = new UserLoginDto { Email = "test@example.com", Password = "password" };
            var token = "test-token";
            _requestVerifierMock.Setup(verifier => verifier.VerifyHash(apiKey)).Returns(true);
            _authenticationServiceMock.Setup(service => service.AuthenticateUserAsync(userLoginDto.Email, userLoginDto.Password)).ReturnsAsync(token);

            // Act
            var result = await _controller.Login(apiKey, userLoginDto);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var response = Assert.IsType<ApiResponse>(okResult.Value);
            Assert.Equal("Usuário autenticado com sucesso!", response.Message);
            Assert.Equal(token, ((Dictionary<string, object>)response.Data)["token"]);
        }

        [Fact]
        public async Task Login_InvalidApiKey_ReturnsUnauthorizedResult()
        {
            // Arrange
            var apiKey = "invalid-api-key";
            var userLoginDto = new UserLoginDto { Email = "test@example.com", Password = "password" };
            _requestVerifierMock.Setup(verifier => verifier.VerifyHash(apiKey)).Returns(false);

            // Act
            var result = await _controller.Login(apiKey, userLoginDto);

            // Assert
            Assert.IsType<UnauthorizedResult>(result);
        }

        [Fact]
        public void Logout_ValidApiKey_ReturnsOkResult()
        {
            // Arrange
            var apiKey = "valid-api-key";
            _requestVerifierMock.Setup(verifier => verifier.VerifyHash(apiKey)).Returns(true);

            // Act
            var result = _controller.Logout(apiKey);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var response = Assert.IsType<ApiResponse>(okResult.Value);
            Assert.Equal("Logout bem-sucedido.", response.Message);
        }

        [Fact]
        public void Logout_InvalidApiKey_ReturnsUnauthorizedResult()
        {
            // Arrange
            var apiKey = "invalid-api-key";
            _requestVerifierMock.Setup(verifier => verifier.VerifyHash(apiKey)).Returns(false);

            // Act
            var result = _controller.Logout(apiKey);

            // Assert
            Assert.IsType<UnauthorizedResult>(result);
        }
    }

    internal class ApiResponse
    {
        public string Message { get; set; }
        public object Data { get; set; }
    }
}