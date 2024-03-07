using api_web_services_dose_certa.Models;

public interface IUserRepository
{
    Task<IEnumerable<User>> GetAllAsync();
}
