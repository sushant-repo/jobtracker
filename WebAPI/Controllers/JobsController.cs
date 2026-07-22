using Microsoft.AspNetCore.Mvc;
using WebAPI.DTOs;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JobsController : Controller
    {
        private readonly IJobService _jobService;

        public JobsController(IJobService jobService)
        {
            _jobService = jobService;
        }
        [HttpGet]
        public async Task<ActionResult<JobResponseDto>> GetAllJobs()
        {
            var jobs = await _jobService.GetAllJobsAsync();
            return Ok(jobs);
        }

        [HttpPost]
        public async Task<IActionResult> CreateJob([FromBody] JobRequestDto jobRequest)
        {
            await _jobService.AddJobAsync(jobRequest);
            return CreatedAtAction(nameof(GetAllJobs), null, jobRequest);
        }
    }
}
