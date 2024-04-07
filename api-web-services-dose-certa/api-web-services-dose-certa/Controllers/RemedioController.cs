using APIDoseCerta.Models;
using api_web_services_dose_certa.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_web_services_dose_certa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RemediosController : ControllerBase
    {
        private readonly IRemedioService _remediosService;

        public RemediosController(IRemedioService remediosService)
        {
            _remediosService = remediosService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Remedio>>> GetRemedios()
        {
            var remedios = await _remediosService.GetRemediosAsync();
            return Ok(remedios);
        }

        [HttpGet("{id:length(24)}", Name = "GetRemedio")]
        public async Task<ActionResult<Remedio>> GetRemedioById(string id)
        {
            var remedio = await _remediosService.GetRemedioByIdAsync(id);

            if (remedio == null)
            {
                return NotFound();
            }

            return Ok(remedio);
        }

        [HttpPost]
        public async Task<ActionResult<Remedio>> CreateRemedio(Remedio remedio)
        {
            await _remediosService.CreateRemedioAsync(remedio);

            return CreatedAtRoute("GetRemedio", new { id = remedio.Id }, remedio);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> UpdateRemedio(string id, Remedio remedioIn)
        {
            var remedio = await _remediosService.GetRemedioByIdAsync(id);

            if (remedio == null)
            {
                return NotFound();
            }

            await _remediosService.UpdateRemedioAsync(id, remedioIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> DeleteRemedio(string id)
        {
            var remedio = await _remediosService.GetRemedioByIdAsync(id);

            if (remedio == null)
            {
                return NotFound();
            }

            await _remediosService.DeleteRemedioAsync(id);

            return NoContent();
        }
    }
}
