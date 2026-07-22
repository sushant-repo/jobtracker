using WebAPI.Data;
using WebAPI.Entities;

namespace WebAPI.Repositories
{
    public class JobRepository
    {
        private readonly AppDBContext context;

        public JobRepository(AppDBContext context)
        {
            this.context = context;
        }
        public async Task AddJobAsync(Job job)
        {
            context.Jobs.Add(job);
            await context.SaveChangesAsync();
        }
    }
}
