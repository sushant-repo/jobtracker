using WebAPI.Data;
using WebAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Repositories
{
    public class CompanyRepository
    {
        private readonly AppDBContext context;

        public CompanyRepository(AppDBContext context)
        {
            this.context = context;
        }

        public async Task AddCompanyAsync(Company company)
        {
            context.Companies.Add(company);
            await context.SaveChangesAsync();
        }

        public async Task<Company> GetCompanyOrDefaultAsync(string name, string location)
        {
            return await context.Companies.FirstOrDefaultAsync(c => c.CompanyName == name && c.Location == location);
        }
    }
}
