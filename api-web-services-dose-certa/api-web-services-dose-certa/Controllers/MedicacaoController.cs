using api_web_services_dose_certa.Models;
using api_web_services_dose_certa.Services;
using APIDoseCerta.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api_web_services_dose_certa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicacaoController : ControllerBase
    {
        private readonly MedicacaoService _medicacaoService;

        public MedicacaoController(MedicacaoService medicacaoService) =>
            _medicacaoService = medicacaoService;

        [HttpGet]
        public async Task<List<Medicacao>> Get() =>
            await _medicacaoService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Medicacao>> Get(string id)
        {
            var medicacao = await _medicacaoService.GetAsync(id);

            if (medicacao is null)
            {
                return NotFound();
            }

            return medicacao;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Medicacao newMedicacao)
        {
            await _medicacaoService.CreateAsync(newMedicacao);

            return CreatedAtAction(nameof(Get), new { id = newMedicacao.Id }, newMedicacao);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Medicacao updatedMedicacao)
        {
            var medicacao = await _medicacaoService.GetAsync(id);

            if (medicacao is null)
            {
                return NotFound();
            }

            updatedMedicacao.Id = medicacao.Id;

            await _medicacaoService.UpdateAsync(id, updatedMedicacao);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var medicacao = await _medicacaoService.GetAsync(id);

            if (medicacao is null)
            {
                return NotFound();
            }

            await _medicacaoService.RemoveAsync(id);

            return NoContent();
        }
    }
}