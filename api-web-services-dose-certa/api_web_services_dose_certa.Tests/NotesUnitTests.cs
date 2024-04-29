using api_web_services_dose_certa.Controllers;
using api_web_services_dose_certa.Models;
using api_web_services_dose_certa.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace api_web_services_dose_certa.Tests
{
    public class NotesTests
    {
        private readonly NotesController _controller;
        private readonly Mock<INotesService> _mockNotesService;

        public NotesTests()
        {
            _mockNotesService = new Mock<INotesService>();
            _controller = new NotesController(_mockNotesService.Object);
        }

        // Passou glória a deus
        [Fact]
        public async Task ReturnsAllNotes()
        {
            // Arrange
            var expectedNotes = new List<Note>
            {
                new Note { Id = "1", Content = "Test Note 1" },
                new Note { Id = "2", Content = "Test Note 2" }
            };

            // Configuração do Mock para retornar os dados esperados
            _mockNotesService.Setup(service => service.GetNotesAsync())
                             .ReturnsAsync(expectedNotes);

            // Act
            var result = await _controller.Get();

            // Assert
            Assert.IsType<ActionResult<List<Note>>>(result); 
            var okResult = Assert.IsAssignableFrom<OkObjectResult>(result.Result);
            var actualNotes = Assert.IsAssignableFrom<List<Note>>(okResult.Value); 
            Assert.Equal(expectedNotes.Count, actualNotes.Count);
        }

        [Fact]
        public async Task CreatesNewNoteReturnsCreatedAtActionResult()
        {
            // Arrange
            var newNote = new Note { Content = "New Test Note" };

            // Configuração do Mock para retornar a nova nota após a criação
            _mockNotesService.Setup(service => service.CreateNoteAsync(It.IsAny<Note>()))
                 .Returns((Note note) => Task.FromResult(newNote));

            // Act
            var result = await _controller.Post(newNote);

            // Assert
            var createdAtActionResult = Assert.IsType<CreatedAtActionResult>(result);
            var returnedNote = Assert.IsAssignableFrom<Note>(createdAtActionResult.Value);
            Assert.Equal(newNote.Content, returnedNote.Content);
            // Se houver outras propriedades a serem verificadas, adicione-as aqui
        }

        [Fact]
        public async Task GetNoteByIdReturnsNote()
        {
            // Arrange
            var expectedNote = new Note { Id = "1", Content = "Test Note" };
            _mockNotesService.Setup(service => service.GetNoteByIdAsync(expectedNote.Id))
                            .ReturnsAsync(expectedNote);

            // Act
            var result = await _controller.Get(expectedNote.Id);

            // Assert
            var actionResult = Assert.IsType<ActionResult<Note>>(result);
            var okResult = Assert.IsType<OkObjectResult>(actionResult.Result);
            var returnedNote = Assert.IsType<Note>(okResult.Value);
            Assert.Equal(expectedNote.Id, returnedNote.Id);
            Assert.Equal(expectedNote.Content, returnedNote.Content);
        }

        [Fact]
        public async Task UpdateNoteReturnsNoContent()
        {
            // Arrange
            var id = "1";
            var updatedNote = new Note { Id = id, Content = "Updated Test Note" };

            // Configurar o serviço de notas mockado para retornar uma nota existente ao procurar pelo ID
            _mockNotesService.Setup(service => service.GetNoteByIdAsync(id))
                            .ReturnsAsync(new Note { Id = id, Content = "Existing Test Note" });

            // Configurar o serviço de notas mockado para indicar que a atualização foi bem-sucedida
            _mockNotesService.Setup(service => service.UpdateNoteAsync(id, updatedNote))
                            .Returns(Task.CompletedTask);

            // Act
            var result = await _controller.Put(id, updatedNote);

            // Assert
            Assert.IsType<NoContentResult>(result);
        }

        [Fact]
        public async Task DeleteNoteReturnsNoContent()
        {
            // Arrange
            var id = "1";
            _mockNotesService.Setup(service => service.GetNoteByIdAsync(id))
                            .ReturnsAsync(new Note()); // Simula uma nota existente
            _mockNotesService.Setup(service => service.DeleteNoteAsync(id))
                            .Returns(Task.FromResult(true)); // Simula a exclusão bem-sucedida

            // Act
            var result = await _controller.Delete(id);

            // Assert
            Assert.IsType<NoContentResult>(result);
        }

    }
}