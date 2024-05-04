using System.Collections.Generic;
using System.Threading.Tasks;
using APIDoseCerta.Models;

namespace api_web_services_dose_certa.Services
{
    public interface IRemedioService
    {
        Task<List<Remedio>> GetRemediosAsync();
        Task<Remedio> GetRemedioByIdAsync(string id);
        Task CreateRemedioAsync(Remedio remedio);
        Task UpdateRemedioAsync(string id, Remedio remedio);
        Task DeleteRemedioAsync(string id);
    }
}
