using System.ComponentModel.DataAnnotations;
using WebAPI.Shared;

namespace WebAPI.Entities
{
    public class Recruiter : BaseIdWithAudit
    {
        public string ContactName { get; set; } = null!;
        public string? ContactEmail { get; set; }
        public string? ContactPhone { get; set; }
        public string? ContactTitle { get; set; }
        public string? ContactProfileURL { get; set; }
    }
}
