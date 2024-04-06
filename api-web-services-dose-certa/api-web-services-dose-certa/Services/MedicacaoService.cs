using Microsoft.Extensions.Options;
using api_web_services_dose_certa.Models;
using MongoDB.Driver;
using APIDoseCerta.Models;

namespace api_web_services_dose_certa.Services
{
    public class MedicacaoService
    {
        private readonly IMongoCollection<Medicacao> _medicacaoCollection;

        //aqui que vc arrumou o erro da propriedade name que aparecia no mongodb
        public MedicacaoService(
            IOptions<DoseCertaDatabaseSettings> doseCertaDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                doseCertaDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                doseCertaDatabaseSettings.Value.DatabaseName);

            _medicacaoCollection = mongoDatabase.GetCollection<Medicacao>(
                doseCertaDatabaseSettings.Value.MedicacaoCollectionName);
        }

        public async Task<List<Medicacao>> GetAsync() =>
            await _medicacaoCollection.Find(_ => true).ToListAsync();

        public async Task<Medicacao?> GetAsync(string id) =>
            await _medicacaoCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Medicacao newMedicacao) =>
            await _medicacaoCollection.InsertOneAsync(newMedicacao);

        public async Task UpdateAsync(string id, Medicacao updatedMedicacao) =>
            await _medicacaoCollection.ReplaceOneAsync(x => x.Id == id, updatedMedicacao);

        public async Task RemoveAsync(string id) =>
            await _medicacaoCollection.DeleteOneAsync(x => x.Id == id);

        public void Start(string id)
        {
            var filter = Builders<Medicacao>.Filter.Eq(m => m.Id, id);
            var update = Builders<Medicacao>.Update.Set(m => m.Status, "Iniciado");
            _medicacaoCollection.UpdateOne(filter, update);
        }
        public void Pause(string id)
        {
           var filter = Builders<Medicacao>.Filter.Eq(m => m.Id, id);
           var update = Builders<Medicacao>.Update.Set(m => m.Status, "Pausado");
           _medicacaoCollection.UpdateOne(filter, update);
        }     
    }  
}
