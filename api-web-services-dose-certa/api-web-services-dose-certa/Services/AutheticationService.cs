using APIDoseCerta.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using api_web_services_dose_certa.Services;

namespace api_web_services_dose_certa.Services
{
    public class AuthenticationService
    {
        private readonly IConfiguration _configuration;
        private readonly UserService _userService;

        public AuthenticationService(IConfiguration configuration, UserService userService)
        {
            _configuration = configuration;
            _userService = userService;
        }

        public async Task<string> AuthenticateUserAsync(string email, string password)
        {
            User user = await _userService.GetByEmailAndPassword(email, password);

            if (user == null)
            {
                return null;
            }

            string token = GenerateJwtToken(user);

            return token;
        }

        private string GenerateJwtToken(User user)
        {
            // Configurações do token JWT
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Secret"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
            new Claim(ClaimTypes.Name, user.Id.ToString()),
            new Claim("UserType", user.UserType) // Adiciona a reivindicação de UserType
                }),
                Expires = DateTime.UtcNow.AddDays(7), // Tempo de expiração do token
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

    }
}
