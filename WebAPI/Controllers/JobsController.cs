using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JobsController : Controller
    {
        [HttpGet]
        public ActionResult<string> GetJobs()
        {
            return Ok("Welcome to Jobs Controller");
        }
    }
}
