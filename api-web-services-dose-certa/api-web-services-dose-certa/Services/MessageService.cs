using APIDoseCerta.Models;
using api_web_services_dose_certa.Models;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Options;
using System.Data.Common;
using System.Security.Cryptography;
using System.Text;

namespace api_web_services_dose_certa.Services;
 public class MessageService
    {
        private readonly MySqlConnection _connection;

    public MessageService(IOptions<MySqlDatabaseSettings> mySqlDatabaseSettings)
    {
        string connectionString = mySqlDatabaseSettings.Value.ConnectionString;
        _connection = new MySqlConnection(connectionString);
    }

        public async Task<List<Message>> GetAllMessagesAsync()
        {
            List<Message> messages = new List<Message>();

            try
            {
                await _connection.OpenAsync();

                string query = "SELECT * FROM Message";
                MySqlCommand command = new MySqlCommand(query, _connection);
                DbDataReader reader = await command.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    Message message = new Message
                    {
                        MessageId = (int)reader["MessageId"],
                        SenderId = (int)reader["SenderId"],
                        ReceiverId = (int)reader["ReceiverId"],
                        Content = reader["Content"].ToString(),
                        SentAt = (DateTime)reader["SentAt"]
                    };
                    messages.Add(message);
                }

                await reader.CloseAsync();
            }
            finally
            {
                await _connection.CloseAsync();
            }

            return messages;
        }

        public async Task<Message> CreateMessageAsync(Message message)
        {
            try
            {
                await _connection.OpenAsync();

                string query = "INSERT INTO Message (SenderId, ReceiverId, Content, SentAt) VALUES (@SenderId, @ReceiverId, @Content, @SentAt)";
                MySqlCommand command = new MySqlCommand(query, _connection);
                command.Parameters.AddWithValue("@SenderId", message.SenderId);
                command.Parameters.AddWithValue("@ReceiverId", message.ReceiverId);
                command.Parameters.AddWithValue("@Content", message.Content);
                command.Parameters.AddWithValue("@SentAt", message.SentAt);

                await command.ExecuteNonQueryAsync();
            }
            finally
            {
                await _connection.CloseAsync();
            }

            return message;
        }

        public async Task<List<Message>> GetMessagesByUserIdAsync(int userId)
        {
           
            List<Message> messages = new List<Message>();

            try
            {
                await _connection.OpenAsync();

                string query = "SELECT * FROM Message WHERE SenderId = @SenderId";
                MySqlCommand command = new MySqlCommand(query, _connection);
                command.Parameters.AddWithValue("@SenderId", userId);

                DbDataReader reader = await command.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    Message message = new Message
                    {
                        MessageId = (int)reader["MessageId"],
                        SenderId = (int)reader["SenderId"],
                        ReceiverId = (int)reader["ReceiverId"],
                        Content = reader["Content"].ToString(),
                        SentAt = (DateTime)reader["SentAt"]
                    };
                    messages.Add(message);
                }

                await reader.CloseAsync();
            }
            finally
            {
                await _connection.CloseAsync();
            }

            return messages;
        }

    }