using Microsoft.AspNetCore.Mvc;
using APIDoseCerta.Models;
using api_web_services_dose_certa.Services;
using APIDoseCerta.Dtos;

namespace api_web_services_dose_certa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly RequestVerifierService _requestVerifier;
        private readonly AuthenticationService _authenticationService;

        public AuthController(RequestVerifierService requestVerifier, AuthenticationService authenticationService)
        {
            _requestVerifier = requestVerifier;
            _authenticationService = authenticationService;
        }
        
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromHeader(Name = "x-api-key")] string key, [FromBody] UserLoginDto userLoginDto)
        {
            if (!_requestVerifier.VerifyHash(key))
            {
                return Unauthorized();
            }

            string token = await _authenticationService.AuthenticateUserAsync(userLoginDto.Email, userLoginDto.Password);

            return Ok(new { message = "Usuário autenticado com sucesso!", token });
        }

        [HttpPost("logout")]
        public IActionResult Logout([FromHeader(Name = "x-api-key")] string key)
        {
            if (!_requestVerifier.VerifyHash(key))
            {
                return Unauthorized();
            }

            return Ok(new { message = "Logout bem-sucedido." });
        }
    }

}
