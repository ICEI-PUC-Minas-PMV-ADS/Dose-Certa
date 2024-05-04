using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_web_services_dose_certa.Models;

namespace api_web_services_dose_certa.Services
{
    public interface INotesService
    {
        Task<List<Note>> GetNotesAsync();
        Task<Note> GetNoteByIdAsync(string id);
        Task CreateNoteAsync(Note note);
        Task UpdateNoteAsync(string id, Note note);
        Task DeleteNoteAsync(string id);
    }
}