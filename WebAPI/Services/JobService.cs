using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.DTOs;
using WebAPI.Entities;
using WebAPI.Repositories;
using System.Linq;

namespace WebAPI.Services
{
    public interface IJobService
    {
        Task AddJobAsync(JobRequestDto jobRequest);
        Task<List<JobResponseDto>> GetAllJobsAsync();
    }
    public class JobService : IJobService
    {
        private readonly AppDBContext appDBContext;
        private readonly JobRepository jobRepository;
        private readonly CompanyService companyService;

        public JobService(AppDBContext appDBContext, JobRepository jobRepository, CompanyService companyService)
        {
            this.appDBContext = appDBContext;
            this.jobRepository = jobRepository;
            this.companyService = companyService;
        }

        public async Task<List<JobResponseDto>> GetAllJobsAsync()
        {
            return await appDBContext.Jobs
                .Include(j => j.Company)
                .Include(j => j.ApplicationStatus)
                .Select(x => new JobResponseDto
                {
                    Id = x.Id,
                    Title = x.Title,
                    Description = x.Description,
                    AppliedOn = x.AppliedOn.Date,
                    Category = x.Category,
                    JobUrl = x.JobURL,
                    Status = x.ApplicationStatus.Title,
                    WorkArrangement = x.WorkArrangement,
                    CompanyName = x.Company.CompanyName,
                    CompanyUrl = x.Company.CompanyURL,
                    CompanyLocation = x.Company.Location
                })
                .ToListAsync();
        }
        public async Task AddJobAsync(JobRequestDto jobRequest)
        {
            var companyId = await companyService.AddCompany(jobRequest.Company);
            var job = jobRequest.Job;

            var newJob = new Job
            {
                Title = job.Title,
                Description = job.Description,
                CompanyId = companyId,
                ApplicationStatusId = appDBContext.ApplicationStatuses.First(s => s.Code == ApplicationStatusEnum.Submitted.ToString()).Id,
                WorkArrangement = job.WorkArrangement.ToString(),
                Category = job.Category,

            };

            await jobRepository.AddJobAsync(newJob);
        }
    }

   
}

public enum ApplicationStatusEnum
{
    Submitted,
    Interview,
    Offered,
    Accepted,
    Decline,
    Closed
}
