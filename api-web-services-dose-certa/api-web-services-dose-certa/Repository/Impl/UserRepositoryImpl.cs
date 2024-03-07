using api_web_services_dose_certa.Models;

public class UserRepository : IUserRepository
{
    public Task<IEnumerable<User>> GetAllAsync()
    {
        throw new NotImplementedException();
    }
}
