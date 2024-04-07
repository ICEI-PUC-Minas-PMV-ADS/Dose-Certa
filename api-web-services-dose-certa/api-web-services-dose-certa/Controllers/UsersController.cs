using APIDoseCerta.Models;
using api_web_services_dose_certa.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_web_services_dose_certa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService) =>
            _userService = userService;

        [HttpGet]
        public async Task<List<User>> GetUsers() =>
            await _userService.GetAllUsers();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<User>> GetById(string id)
        {
            var user = await _userService.GetById(id);

            if (user is null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpPost]
        [HttpPost]
        public async Task<IActionResult> CreateUser(User newUser)
        {
            await _userService.CreateAsync(newUser);

            return StatusCode(201);
        }


        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> updateUserById(string id, User updateUser)
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

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> deleteUserById(string id)
        {
            var user = await _userService.GetById(id);

            if (user is null)
            {
                return NotFound();
            }

            await _userService.RemoveAsync(id);

            return NoContent();
        }
    }
}
