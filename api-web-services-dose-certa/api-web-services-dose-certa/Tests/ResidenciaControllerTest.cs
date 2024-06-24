// using api_web_services_dose_certa.Controllers;
// using api_web_services_dose_certa.Services;
// using Microsoft.AspNetCore.Mvc;
// using Moq;
// using Xunit;
// using APIDoseCerta.Models;


// namespace Tests
// {
//     public class ResidenciaControllerTest
//     {
//         private readonly ResidenciaController _controller;
//         private readonly Mock<ResidenciaService> _residenciaServiceMock;

//         public ResidenciaControllerTest()
//         {
//             _residenciaServiceMock = new Mock<ResidenciaService>();
//             _controller = new ResidenciaController(_residenciaServiceMock.Object);
//         }
/*
        [Fact]
        public async Task GetResidencia_ReturnsListOfResidencia()
        {
            // Arrange
            var residencia = new List<Residencia> 
            { new Residencia { Id = 1, Rua = "Olinda", Numero, = "44", Cidade = "Manaus", Bairro = "Alvorada", Complemento = "Bloco 13 apt 4" },
              new Residencia { Id = 2, Rua = "Olinda", Numero, = "40", Cidade = "Borba", Bairro = "Flores", Complemento = "Bloco 10 apt 5"} };
            _residenciaServiceMock.Setup(service => service.GetAllUsers()).ReturnsAsync(users);

            // Act
            var result = await _controller.GetResidencia();

            // Assert
            var okResult = Assert.IsType<ActionResult<List<Residencia>>>(result);
            var model = Assert.IsAssignableFrom<List<Residencia>>(okResult.Value);
            Assert.Equal(residencia.Count, model.Count);
        }

        [Fact]
        public async Task GetById_ExistingId_ReturnsResidencia()
        {
            // Arrange
            var residencia = new Residencia { Id = 1, Rua = "Olinda", Numero, = "44", Cidade = "Manaus", Bairro = "Alvorada", Complemento = "Bloco 13 apt 4" };
            _userServiceMock.Setup(service => service.GetById(user.Id)).ReturnsAsync(residencia);

            // Act
            var result = await _controller.GetById(residencia.Id);

            // Assert
            var okResult = Assert.IsType<ActionResult<Residencia>>(result);
            var model = Assert.IsAssignableFrom<Residencia>(okResult.Value);
            Assert.Equal(residencia.Id, model.Id);
            Assert.Equal(residencia.Name, model.Name);
        }

        [Fact]
        public async Task GetById_NonExistingId_ReturnsNotFound()
        {
            // Arrange
            var nonExistingId = 999;
            _userServiceMock.Setup(service => service.GetById(nonExistingId)).ReturnsAsync((Residencia)null);

            // Act
            var result = await _controller.GetById(nonExistingId);

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }
    */
//     }
// }