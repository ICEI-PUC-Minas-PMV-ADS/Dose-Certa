using Microsoft.AspNetCore.Mvc;


namespace api_web_services_dose_certa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController
    {
        private static List<Models.User> users = new List<Models.User>();
       
       [HttpGet]
        public ActionResult<IEnumerable<Models.User>> GetAllUsers()
        {
            return users;
        }
    }
}
