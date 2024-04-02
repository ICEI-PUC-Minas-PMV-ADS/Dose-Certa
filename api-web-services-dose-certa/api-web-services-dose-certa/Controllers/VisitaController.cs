using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using APIDoseCerta.Models;

namespace APIDoseCerta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisitaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
