using WebAPI.Data;
using WebAPI.DTOs;
using WebAPI.Entities;
using WebAPI.Repositories;

namespace WebAPI.Services
{
    public class CompanyService
    {
        private readonly AppDBContext context;
        private readonly CompanyRepository repo;

        public CompanyService(AppDBContext context, CompanyRepository repo)
        {
            this.context = context;
            this.repo = repo;
        }

        public async Task<int> AddCompany(CompanyDto company)
        {
            var existingCompany = await repo.GetCompanyOrDefaultAsync(company.Name, company.Location);
            if (existingCompany != null)
            {
                return existingCompany.Id;
            }

            var newCompany = new Company
            {
                CompanyName = company.Name,
                CompanyURL = company.Url,
                Location = company.Location
            };

            await repo.AddCompanyAsync(newCompany);
            return newCompany.Id;
        }
    }
}
