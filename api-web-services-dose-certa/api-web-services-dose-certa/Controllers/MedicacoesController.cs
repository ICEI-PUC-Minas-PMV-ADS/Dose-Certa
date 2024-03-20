using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using APIDoseCerta.Medicacoes;

namespace APIDoseCerta.Medicacoes
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicacoesController : Controller
    {
        private static List<Medicacoes> medicacoes = new List<Medicacoes>();

        // Cadastrar uma nova medicacao
        [HttpPost]
        public ActionResult<Medicacoes> CreateMedicacao(Medicacoes novaMedicacao)
        {
            medicacoes.Add(novaMedicacao);
            return novaMedicacao;
        }

        // Iniciar uma medicação
        // Add a logica p iniciar uma medicacao

        // Pausar uma medicação
        // Add a logica p pausar uma medicacao

        // Excluir uma medicação
        // Add a lógica p excluir medicacao
        [HttpDelete("{id}")]
        public ActionResult DeleteMedicacao(int id)
        {
            var medicacao = medicacoes.FirstOrDefault(m => m.Id == id);
            if (medicacao == null)
            {
                return NotFound();
            }

            medicacoes.Remove(medicacao);
            return NoContent();
        }

        // Registrar os efeitos colaterais de uma medicacao
        // Add a logica p registrar os efeitos colaterais de uma medicacao
    }
}
