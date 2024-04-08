using Microsoft.Extensions.Options;
using api_web_services_dose_certa.Models;
using MongoDB.Driver;
using APIDoseCerta.Models;

namespace api_web_services_dose_certa.Services
{
    public class ResidenciaService
    {
        private readonly IMongoCollection<Residencia> _residenciaCollection;

        //aqui que vc arrumou o erro da propriedade name que aparecia no mongodb
        public ResidenciaService(
            IOptions<DoseCertaDatabaseSettings> doseCertaDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                doseCertaDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                doseCertaDatabaseSettings.Value.DatabaseName);

            _residenciaCollection = mongoDatabase.GetCollection<Residencia>(
                doseCertaDatabaseSettings.Value.ResidenciaCollectionName);
        }

        public async Task<List<Residencia>> GetAsync() =>
            await _residenciaCollection.Find(_ => true).ToListAsync();

        public async Task<Residencia?> GetAsync(string id) =>
            await _residenciaCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Residencia newResidencia) =>
            await _residenciaCollection.InsertOneAsync(newResidencia);

        public async Task UpdateAsync(string id, Residencia updatedResidencia) =>
            await _residenciaCollection.ReplaceOneAsync(x => x.Id == id, updatedResidencia);

        public async Task RemoveAsync(string id) =>
            await _residenciaCollection.DeleteOneAsync(x => x.Id == id);
    
    }  
}
