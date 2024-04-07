using api_web_services_dose_certa.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using api_web_services_dose_certa.Services;

namespace api_web_services_dose_certa.Services
{
    public class NotesService : INotesService
    {
        private readonly IMongoCollection<Note> _notesCollection;

        public NotesService(IOptions<DoseCertaDatabaseSettings> databaseSettings)
        {
            var client = new MongoClient(databaseSettings.Value.ConnectionString);
            var database = client.GetDatabase(databaseSettings.Value.DatabaseName);
            _notesCollection = database.GetCollection<Note>(databaseSettings.Value.NotesCollectionName);
        }

        public async Task<List<Note>> GetNotesAsync() =>
            await _notesCollection.Find(_ => true).ToListAsync();

        public async Task<Note> GetNoteByIdAsync(string id) =>
            await _notesCollection.Find(note => note.Id == id).FirstOrDefaultAsync();

        public async Task CreateNoteAsync(Note note) =>
            await _notesCollection.InsertOneAsync(note);

        public async Task UpdateNoteAsync(string id, Note note) =>
            await _notesCollection.ReplaceOneAsync(n => n.Id == id, note);

        public async Task DeleteNoteAsync(string id) =>
            await _notesCollection.DeleteOneAsync(n => n.Id == id);
    }
}
