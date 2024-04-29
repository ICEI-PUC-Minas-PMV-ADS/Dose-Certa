using Microsoft.AspNetCore.Mvc.Testing;
using System.Text;
using System.Net;

namespace api_web_services_dose_certa.Tests
{
    public class NoteControllerIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly WebApplicationFactory<Program> _factory;

        public NoteControllerIntegrationTests(WebApplicationFactory<Program> factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task GetNotes_ReturnsSuccessAndCorrectContentType()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync("/api/Notes");

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal("application/json; charset=utf-8", response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task PostNote_ReturnsSuccessAndCreatedResource()
        {
            // Arrange
            var client = _factory.CreateClient();
            var newNote = new
            {
                Content = "This is a test note"
            };
            var content = new StringContent(System.Text.Json.JsonSerializer.Serialize(newNote), Encoding.UTF8, "application/json");

            // Act
            var response = await client.PostAsync("/api/Notes", content);

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        }

        [Fact]
        public async Task GetNoteById_ReturnsSuccessAndCorrectContent()
        {
            // Arrange
            var client = _factory.CreateClient();
            var newNote = new
            {
                Content = "This is a test note"
            };
            var postContent = new StringContent(System.Text.Json.JsonSerializer.Serialize(newNote), Encoding.UTF8, "application/json");

            // Create a new note
            var postResponse = await client.PostAsync("/api/Notes", postContent);
            postResponse.EnsureSuccessStatusCode();
            var location = postResponse.Headers.Location;

            // Act: Get the created note by ID
            var getResponse = await client.GetAsync(location.ToString());

            // Assert
            getResponse.EnsureSuccessStatusCode(); // Status Code 2xx
            Assert.Equal(HttpStatusCode.OK, getResponse.StatusCode);

            var responseBody = await getResponse.Content.ReadAsStringAsync();
            Assert.Contains("This is a test note", responseBody);
        }

        [Fact]
        public async Task PutNote_ReturnsSuccessAndUpdatedResource()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Create a new note
            var newNote = new
            {
                Content = "This is a test note"
            };
            var postContent = new StringContent(System.Text.Json.JsonSerializer.Serialize(newNote), Encoding.UTF8, "application/json");

            var postResponse = await client.PostAsync("/api/Notes", postContent);
            postResponse.EnsureSuccessStatusCode();
            var location = postResponse.Headers.Location;

            // Extraindo o ID
            var id = location.ToString().Split('/').Last();

            // Update the note with the ID included
            var updatedNote = new
            {
                Id = id,
                Content = "This is an updated test note"
            };
            var putContent = new StringContent(System.Text.Json.JsonSerializer.Serialize(updatedNote), Encoding.UTF8, "application/json");

            // Act: Update the note using PUT
            var putResponse = await client.PutAsync(location.ToString(), putContent);

            // Assert
            putResponse.EnsureSuccessStatusCode(); // Status Code 2xx
            Assert.Equal(HttpStatusCode.NoContent, putResponse.StatusCode);

            var getResponse = await client.GetAsync(location.ToString());
            getResponse.EnsureSuccessStatusCode();
            var responseBody = await getResponse.Content.ReadAsStringAsync();
            Assert.Contains("This is an updated test note", responseBody);
        }

        [Fact]
        public async Task DeleteNote_ReturnsSuccessAndDeletedResource()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Create a new note
            var newNote = new
            {
                Content = "This is a test note"
            };
            var postContent = new StringContent(System.Text.Json.JsonSerializer.Serialize(newNote), Encoding.UTF8, "application/json");

            var postResponse = await client.PostAsync("/api/Notes", postContent);
            postResponse.EnsureSuccessStatusCode();
            var location = postResponse.Headers.Location;

            // Act: Delete the note
            var deleteResponse = await client.DeleteAsync(location.ToString());

            // Assert
            deleteResponse.EnsureSuccessStatusCode(); 
            Assert.Equal(HttpStatusCode.NoContent, deleteResponse.StatusCode);

            var getResponse = await client.GetAsync(location.ToString());
            Assert.Equal(HttpStatusCode.NotFound, getResponse.StatusCode);
        }



    }
}