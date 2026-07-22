using WebAPI.Shared;

namespace WebAPI.Entities
{
    public class Job : BaseIdWithAudit
    {
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string JobURL { get; set; } = string.Empty;
        public DateTime AppliedOn { get; set; } = DateTime.Now;
        public int CompanyId { get; set; }
        public string Category { get; set; } = string.Empty;
        public string WorkArrangement { get; set; } = string.Empty;
        public int ApplicationStatusId { get; set; }
        public Company Company { get; set; }
        public ApplicationStatus ApplicationStatus { get; set; }

    }
}
