using api_web_services_dose_certa.Models;
using api_web_services_dose_certa.Services;
using APIDoseCerta.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api_web_services_dose_certa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResidenciaController : ControllerBase
    {
        private readonly ResidenciaService _residenciaService;

        public ResidenciaController(ResidenciaService residenciaService) =>
            _residenciaService = residenciaService;

        [HttpGet]
        public async Task<List<Residencia>> Get() =>
            await _residenciaService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Residencia>> Get(string id)
        {
            var residencia = await _residenciaService.GetAsync(id);

            if (residencia is null)
            {
                return NotFound();
            }

            return residencia;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Residencia newResidencia)
        {
            await _residenciaService.CreateAsync(newResidencia);

            return CreatedAtAction(nameof(Get), new { id = newResidencia.Id }, newResidencia);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Residencia updatedResidencia)
        {
            var residencia = await _residenciaService.GetAsync(id);

            if (residencia is null)
            {
                return NotFound();
            }

            updatedResidencia.Id = residencia.Id;

            await _residenciaService.UpdateAsync(id, updatedResidencia);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var residencia = await _residenciaService.GetAsync(id);

            if (residencia is null)
            {
                return NotFound();
            }

            await _residenciaService.RemoveAsync(id);

            return NoContent();
        }
    }
}