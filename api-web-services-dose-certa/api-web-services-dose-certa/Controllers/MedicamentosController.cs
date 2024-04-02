using System;
using Microsoft.AspNetCore.Mvc;

namespace SuaAplicacao.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicacoesController : ControllerBase
    {
        private readonly NossoDbContext _context;

        public MedicacoesController(NossoDbContext context)
        {
            _context = context;
        }

        // Endpoint para cadastrar uma nova medicação
        [HttpPost]
        public IActionResult CadastrarMedicacoes(Medicacao novaMedicacao)
        {
            _context.Medicacoes.Add(novaMedicacao);
            _context.SaveChanges();
            return Ok(novaMedicacao);
        }

        // Endpoint para iniciar uma medicação
        [HttpPut("{id}/iniciar")]
        public IActionResult IniciarMedicacoes(int id)
        {
            var medicacao = _context.Medicacoes.Find(id);
            if (medicacao == null)
            {
                return NotFound();
            }

            medicacao.DataInicio = DateTime.Now;
            _context.SaveChanges();
            return Ok(medicacao);
        }

        // Endpoint para pausar uma medicação
        [HttpPut("{id}/pausar")]
        public IActionResult PausarMedicacoes(int id)
        {
            var medicacao = _context.Medicacoes.Find(id);
            if (medicacao == null)
            {
                return NotFound();
            }

            medicacao.DataTermino = DateTime.Now;
            _context.SaveChanges();
            return Ok(medicacao);
        }

        // Endpoint para excluir uma medicação
        [HttpDelete("{id}")]
        public IActionResult ExcluirMedicacoes(int id)
        {
            var medicacaoParaExcluir = _context.Medicacoes.Find(id);
            if (medicacaoParaExcluir == null)
            {
                return NotFound();
            }

            _context.Medicacoes.Remove(medicacaoParaExcluir);
            _context.SaveChanges();
            return NoContent();
        }

        // Endpoint para registrar efeitos colaterais
        [HttpPost("{id}/efeitos-colaterais")]
        public IActionResult RegistrarEfeitosColaterais(int id, [FromBody] string efeitosColaterais)
        {
            var medicacao = _context.Medicacoes.Find(id);
            if (medicacao == null)
            {
                return NotFound();
            }

            medicacao.Observacao = efeitosColaterais;
            _context.SaveChanges();
            return Ok(medicacao);
        }
    }
