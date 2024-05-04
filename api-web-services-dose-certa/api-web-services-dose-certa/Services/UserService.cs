using APIDoseCerta.Models;
using api_web_services_dose_certa.Models;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Options;
using System.Data.Common;
using System.Security.Cryptography;
using System.Text;

namespace api_web_services_dose_certa.Services;

public class UserService
{
    private readonly MySqlConnection _connection;

    public UserService(IOptions<MySqlDatabaseSettings> mySqlDatabaseSettings)
    {
        string connectionString = mySqlDatabaseSettings.Value.ConnectionString;
        _connection = new MySqlConnection(connectionString);
    }

    public async Task<List<User>> GetAllUsers()
    {
        List<User> users = new List<User>();

        try
        {
            await _connection.OpenAsync();

            string query = "SELECT * FROM User";
            MySqlCommand command = new MySqlCommand(query, _connection);
            DbDataReader reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                User user = new User
                {
                    Id = (int)reader["Id"],
                    Name = reader["Name"].ToString(),
                    Email = reader["Email"].ToString(),
                    UserType = reader["UserType"].ToString(),
                    DataNascimento = reader["DataNascimento"].ToString(),

                    // HouseId = reader["HouseId"].ToString(),
                    Cpf = reader["Cpf"].ToString()                };
                users.Add(user);
            }

            await reader.CloseAsync();
        }
        finally
        {
            await _connection.CloseAsync();
        }

        return users;
    }

    public async Task<User> GetById(int id)
    {
        User user = null;

        try
        {
            await _connection.OpenAsync();

            string query = "SELECT * FROM User WHERE Id = @Id";
            MySqlCommand command = new MySqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Id", id);

            DbDataReader reader = await command.ExecuteReaderAsync();

            if (await reader.ReadAsync())
            {
                user = new User
                {
                    Id = (int)reader["Id"],
                    Name = reader["Name"].ToString(),
                    Email = reader["Email"].ToString(),
                    UserType = reader["UserType"].ToString(),
                    // HouseId = reader["HouseId"].ToString()
                };
            }

            await reader.CloseAsync();
        }
        finally
        {
            await _connection.CloseAsync();
        }

        return user;
    }

public async Task CreateAsync(User userToCreate)
{
    try
    {
        await _connection.OpenAsync();

        string hashedPassword = HashPassword(userToCreate.Password);

        string query = "INSERT INTO User (Name, Email, Password, UserType, Cpf, DataNascimento) VALUES (@Name, @Email, @Password, @UserType, @Cpf, @DataNascimento)";
        MySqlCommand command = new MySqlCommand(query, _connection);
        command.Parameters.AddWithValue("@Name", userToCreate.Name);
        command.Parameters.AddWithValue("@Email", userToCreate.Email);
        command.Parameters.AddWithValue("@Password", hashedPassword); // Salva o hash da senha
        command.Parameters.AddWithValue("@UserType", userToCreate.UserType);
        command.Parameters.AddWithValue("@Cpf", userToCreate.Cpf);
        command.Parameters.AddWithValue("@DataNascimento", userToCreate.DataNascimento);

        await command.ExecuteNonQueryAsync();
    }
    finally
    {
        await _connection.CloseAsync();
    }
}

   public async Task UpdateAsync(int id, User userUpdated)
{
    try
    {
        await _connection.OpenAsync();

        string hashedPassword = HashPassword(userUpdated.Password);

        string query = "UPDATE User SET Name = @Name, Email = @Email, Password = @Password, UserType = @UserType, DataNascimento = @DataNascimento WHERE Id = @Id";
        MySqlCommand command = new MySqlCommand(query, _connection);
        command.Parameters.AddWithValue("@Id", id);
        command.Parameters.AddWithValue("@Name", userUpdated.Name);
        command.Parameters.AddWithValue("@Email", userUpdated.Email);
        command.Parameters.AddWithValue("@Password", hashedPassword); // Salva o hash da senha
        command.Parameters.AddWithValue("@UserType", userUpdated.UserType);
        command.Parameters.AddWithValue("@DataNascimento", userUpdated.DataNascimento);

        await command.ExecuteNonQueryAsync();
    }
    finally
    {
        await _connection.CloseAsync();
    }
}

    public async Task RemoveAsync(int id)
    {
        try
        {
            await _connection.OpenAsync();

            string query = "DELETE FROM User WHERE Id = @Id";
            MySqlCommand command = new MySqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Id", id);

            await command.ExecuteNonQueryAsync();
        }
        finally
        {
            await _connection.CloseAsync();
        }
    }

    public async Task<User> GetByEmailAndPassword(string email, string password)
    {
        User user = null;

        string hashedPassword = HashPassword(password);

        try
        {
            await _connection.OpenAsync();

            string query = "SELECT * FROM User WHERE Email = @Email AND Password = @Password";
            MySqlCommand command = new MySqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Email", email);
            command.Parameters.AddWithValue("@Password", hashedPassword);

            using (var reader = await command.ExecuteReaderAsync())
            {
                if (await reader.ReadAsync())
                {
                    user = new User
                    {
                        Id = (int)reader["Id"],
                        Name = reader["Name"].ToString(),
                        Email = reader["Email"].ToString(),
                        UserType = reader["UserType"].ToString(),
                        // HouseId = reader["HouseId"].ToString()
                    };
                }
            }
        }
        finally
        {
            await _connection.CloseAsync();
        }

        return user;
    }

    private string HashPassword(string password)
    {
        using (var sha256 = SHA256.Create())
        {
            byte[] bytes = Encoding.UTF8.GetBytes(password);

            byte[] hash = sha256.ComputeHash(bytes);

            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                builder.Append(hash[i].ToString("x2"));
            }
            return builder.ToString();
        }
    }
}