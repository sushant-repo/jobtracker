using System.ComponentModel.DataAnnotations;
using WebAPI.Shared;

namespace WebAPI.Entities
{
    public class Company : BaseIdWithAudit
    {
        public string CompanyName { get; set; } = null!;
        public string? CompanyURL { get; set; }
        public string? Location { get; set; }
        public List<Recruiter> Recruiters { get; set; } = [];
    }
}
