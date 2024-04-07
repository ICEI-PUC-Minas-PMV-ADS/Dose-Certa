using APIDoseCerta.Models;
using api_web_services_dose_certa.Models;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using System.Data.Common;

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
                    Password = reader["Password"].ToString(),
                    UserType = reader["UserType"].ToString(),
                    HouseId = reader["HouseId"].ToString()
                };
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
                    Password = reader["Password"].ToString(),
                    UserType = reader["UserType"].ToString(),
                    HouseId = reader["HouseId"].ToString()
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

            string query = "INSERT INTO User (Id, Name, Email, Password, UserType, HouseId) VALUES (@Id, @Name, @Email, @Password, @UserType, @HouseId)";
            MySqlCommand command = new MySqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Id", userToCreate.Id);
            command.Parameters.AddWithValue("@Name", userToCreate.Name);
            command.Parameters.AddWithValue("@Email", userToCreate.Email);
            command.Parameters.AddWithValue("@Password", userToCreate.Password);
            command.Parameters.AddWithValue("@UserType", userToCreate.UserType);
            command.Parameters.AddWithValue("@HouseId", userToCreate.HouseId);

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

            string query = "UPDATE User SET Name = @Name, Email = @Email, Password = @Password, UserType = @UserType, HouseId = @HouseId WHERE Id = @Id";
            MySqlCommand command = new MySqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Id", id);
            command.Parameters.AddWithValue("@Name", userUpdated.Name);
            command.Parameters.AddWithValue("@Email", userUpdated.Email);
            command.Parameters.AddWithValue("@Password", userUpdated.Password);
            command.Parameters.AddWithValue("@UserType", userUpdated.UserType);
            command.Parameters.AddWithValue("@HouseId", userUpdated.HouseId);

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
}
