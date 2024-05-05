using APIDoseCerta.Models;
using api_web_services_dose_certa.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_web_services_dose_certa.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService) =>
            _userService = userService;

        [HttpGet]
        public async Task<List<User>> GetUsers() =>
            await _userService.GetAllUsers();

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetById(int id)
        {
            var user = await _userService.GetById(id);

            if (user is null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(User newUser)
        {
            await _userService.CreateAsync(newUser);

            return StatusCode(201);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUserById(int id, User updateUser)
        {
            var user = await _userService.GetById(id);

            if (user is null)
            {
                return NotFound();
            }

            updateUser.Id = user.Id;

            await _userService.UpdateAsync(id, updateUser);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserById(int id)
        {
            var user = await _userService.GetById(id);

            if (user is null)
            {
                return NotFound();
            }

            await _userService.RemoveAsync(id);

            return NoContent();
        }

        [HttpGet("patientCount")]
        public async Task<int> GetPatientCount() =>
            await _userService.GetPatientCount();
    }
}
