using APIDoseCerta.Models;
using api_web_services_dose_certa.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_web_services_dose_certa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisitaController : ControllerBase
    {
        private readonly VisitaService _visitaService;

        public VisitaController(VisitaService visitaService) =>
            _visitaService = visitaService;

        [HttpGet]
        public async Task<List<Visita>> Get() =>
            await _visitaService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Visita>> Get(string id)
        {
            var visita = await _visitaService.GetAsync(id);

            if (visita is null)
            {
                return NotFound();
            }

            return visita;
        }

        //Postar novas visitas
        [HttpPost]
        public async Task<IActionResult> Post(Visita newVisita)
        {
            await _visitaService.CreateAsync(newVisita);

            return CreatedAtAction(nameof(Get), new { id = newVisita.Id }, newVisita);
        }

        //Adicionar novas visitas 
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Visita updatedVisita)
        {
            var visita = await _visitaService.GetAsync(id);

            if (visita is null)
            {
                return NotFound();
            }

            updatedVisita.Id = visita.Id;

            await _visitaService.UpdateAsync(id, updatedVisita);

            return NoContent();
        }

        //Remover Visitas
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var visita = await _visitaService.GetAsync(id);

            if (visita is null)
            {
                return NotFound();
            }

            await _visitaService.RemoveAsync(id);

            return NoContent();
        }
    }
}
