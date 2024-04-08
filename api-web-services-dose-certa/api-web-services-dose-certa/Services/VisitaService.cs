using APIDoseCerta.Models;
using api_web_services_dose_certa.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_web_services_dose_certa.Services
{
    public class VisitaService
    {
        private readonly IMongoCollection<Visita> _visitasCollection;

        public VisitaService(
            IOptions<DoseCertaDatabaseSettings> doseCertaDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                doseCertaDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                doseCertaDatabaseSettings.Value.DatabaseName);

            _visitasCollection = mongoDatabase.GetCollection<Visita>(
                doseCertaDatabaseSettings.Value.VisitaCollectionName);
        }

        public async Task<List<Visita>> GetAsync() =>
            await _visitasCollection.Find(visita => true).ToListAsync();

        public async Task<Visita?> GetAsync(string id) =>
            await _visitasCollection.Find(visita => visita.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Visita newVisita) =>
            await _visitasCollection.InsertOneAsync(newVisita);

        public async Task UpdateAsync(string id, Visita updatedVisita) =>
            await _visitasCollection.ReplaceOneAsync(visita => visita.Id == id, updatedVisita);

        public async Task RemoveAsync(string id) =>
            await _visitasCollection.DeleteOneAsync(visita => visita.Id == id);
    }
}

