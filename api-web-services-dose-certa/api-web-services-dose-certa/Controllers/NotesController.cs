using api_web_services_dose_certa.Models;
using api_web_services_dose_certa.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api_web_services_dose_certa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INotesService _notesService;

        public NotesController(INotesService notesService)
        {
            _notesService = notesService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Note>>> Get()
        {
            var notes = await _notesService.GetNotesAsync();
            return Ok(notes);
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Note>> Get(string id)
        {
            var note = await _notesService.GetNoteByIdAsync(id);
            if (note == null)
            {
                return NotFound();
            }
            return Ok(note);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Note note)
        {
            await _notesService.CreateNoteAsync(note);
            return CreatedAtAction(nameof(Get), new { id = note.Id }, note);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Put(string id, Note note)
        {
            var existingNote = await _notesService.GetNoteByIdAsync(id);
            if (existingNote == null)
            {
                return NotFound();
            }
            
            if (note.Id != id)
            {
                return BadRequest("O id do objeto note não corresponde ao id do documento existente.");
            }

            await _notesService.UpdateNoteAsync(id, note);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var existingNote = await _notesService.GetNoteByIdAsync(id);
            if (existingNote == null)
            {
                return NotFound();
            }
            await _notesService.DeleteNoteAsync(id);
            return NoContent();
        }
    }
}
