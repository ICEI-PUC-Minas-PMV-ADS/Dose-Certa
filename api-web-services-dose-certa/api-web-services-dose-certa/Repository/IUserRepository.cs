using api_web_services_dose_certa.Models;

public interface IUserRepository
{
    Task<IEnumerable<User>> GetAllAsync();

    /*
     
     public async Task<User> GetUserAsync(string id, string type)
    {
        if (type == "Paciente")
        {
            return await _context.Users.FindAsync(x => x.Id == id && x.UserType == "Paciente");
        }
        else if (type == "Agente")
        {
            return await _context.Users.FindAsync(x => x.Id == id && x.UserType == "Agente");
        }

        return null;
    }
     
     */
}
