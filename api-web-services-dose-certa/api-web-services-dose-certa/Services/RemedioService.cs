using APIDoseCerta.Models;
using api_web_services_dose_certa.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_web_services_dose_certa.Services
{
    public class RemedioService : IRemedioService
    {
        private readonly IMongoCollection<Remedio> _remediosCollection;

        public RemedioService(
            IOptions<DoseCertaDatabaseSettings> doseCertaDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                doseCertaDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                doseCertaDatabaseSettings.Value.DatabaseName);

            _remediosCollection = mongoDatabase.GetCollection<Remedio>(
                doseCertaDatabaseSettings.Value.RemedioCollectionName);
        }

        public async Task<List<Remedio>> GetRemediosAsync() // Ajuste do nome do método
        {
            return await _remediosCollection.Find(remedio => true).ToListAsync();
        }

        public async Task<Remedio> GetRemedioByIdAsync(string id)
        {
            return await _remediosCollection.Find<Remedio>(remedio => remedio.Id == id).FirstOrDefaultAsync();
        }

        public async Task CreateRemedioAsync(Remedio remedio)
        {
            await _remediosCollection.InsertOneAsync(remedio);
        }

        public async Task UpdateRemedioAsync(string id, Remedio remedioIn)
        {
            await _remediosCollection.ReplaceOneAsync(remedio => remedio.Id == id, remedioIn);
        }

        public async Task DeleteRemedioAsync(string id)
        {
            await _remediosCollection.DeleteOneAsync(remedio => remedio.Id == id);
        }
    }
}

