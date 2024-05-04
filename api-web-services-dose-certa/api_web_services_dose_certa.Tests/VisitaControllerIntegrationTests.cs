using Microsoft.AspNetCore.Mvc.Testing;
using System.Text;
using System.Net;

namespace api_web_services_dose_certa.Tests
{
    public class VisitaControllerIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly WebApplicationFactory<Program> _factory;

        public VisitaControllerIntegrationTests(WebApplicationFactory<Program> factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task GetVisitas_ReturnsSuccessAndCorrectContentType()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync("/api/Visita");

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal("application/json; charset=utf-8", response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task PostVisita_ReturnsSuccessAndCreatedResource()
        {
            // Arrange
            var client = _factory.CreateClient();
            var newVisita = new
            {
                Date = "2024-04-29T23:07:30.220Z",
                Status = "A Fazer",
                Observacoes = "This is a test observacoes"
            };
            var content = new StringContent(System.Text.Json.JsonSerializer.Serialize(newVisita), Encoding.UTF8, "application/json");

            // Act
            var response = await client.PostAsync("/api/Visita", content);

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        }

        [Fact]
        public async Task GetVisitaById_ReturnsSuccessAndCorrectContent()
        {
            // Arrange
            var client = _factory.CreateClient();
            var newVisita = new
            {
                Date = "2024-04-29T23:07:30.220Z",
                Status = "A Fazer",
                Observacoes = "This is a test visit"
            };
            var postContent = new StringContent(System.Text.Json.JsonSerializer.Serialize(newVisita), Encoding.UTF8, "application/json");

            // Create a new note
            var postResponse = await client.PostAsync("/api/Visita", postContent);
            postResponse.EnsureSuccessStatusCode();
            var location = postResponse.Headers.Location;

            // Act: Get the created note by ID
            var getResponse = await client.GetAsync(location.ToString());

            // Assert
            getResponse.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.OK, getResponse.StatusCode);

            var responseBody = await getResponse.Content.ReadAsStringAsync();
            Assert.Contains("A Fazer", responseBody);
            Assert.Contains("This is a test visit", responseBody);
        }
        

        [Fact]
        public async Task PutNote_ReturnsSuccessAndUpdatedResource()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Create a new note
            var newVisita = new
            {
                Date = "2024-04-29T23:07:30.220Z",
                Status = "A Fazer",
                Observacoes = "This is a test visit"
            };
            var postContent = new StringContent(System.Text.Json.JsonSerializer.Serialize(newVisita), Encoding.UTF8, "application/json");

            var postResponse = await client.PostAsync("/api/Visita", postContent);
            postResponse.EnsureSuccessStatusCode();
            var location = postResponse.Headers.Location;

            // Update the visita
            var updatedVisita = new
            {
                Date = "2024-04-29T23:07:30.220Z",
                Status = "A Fazer",
                Observacoes = "This is an updated test visit"
            };
            var putContent = new StringContent(System.Text.Json.JsonSerializer.Serialize(updatedVisita), Encoding.UTF8, "application/json");

            // Act: Update the visita using PUT
            var putResponse = await client.PutAsync(location.ToString(), putContent);

            // Assert
            putResponse.EnsureSuccessStatusCode(); // Status Code 2xx
            Assert.Equal(HttpStatusCode.NoContent, putResponse.StatusCode);

            var getResponse = await client.GetAsync(location.ToString());
            getResponse.EnsureSuccessStatusCode();
            var responseBody = await getResponse.Content.ReadAsStringAsync();
            Assert.Contains("This is an updated test", responseBody);
            Assert.Contains("This is an updated test visit", responseBody);
        }

        [Fact]
        public async Task DeleteVisita_ReturnsSuccessAndDeletedResource()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Create a new note
            var newVisita = new
            {
                Date = "2024-04-29T23:07:30.220Z",
                Status = "A Fazer",
                Observacoes = "This is a test visit"
            };
            var postContent = new StringContent(System.Text.Json.JsonSerializer.Serialize(newVisita), Encoding.UTF8, "application/json");

            var postResponse = await client.PostAsync("/api/Visita", postContent);
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