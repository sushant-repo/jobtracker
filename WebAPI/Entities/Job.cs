using System.ComponentModel.DataAnnotations;
using WebAPI.Shared;

namespace WebAPI.Entities
{
    public class Job : BaseIdWithAudit
    {
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string? Source { get; set; }
        public string JobURL { get; set; } = null!;
        public string? PostedSalary { get; set; }
        public string? ExpectedSalary { get; set; }
        public DateTime AppliedOn { get; set; }
        public int StatusId { get; set; }
        public ApplicationStatus ApplicationStatus { get; set; } = null!;

        [AllowedValues("Full Time", "Part Time", "Contract")]
        public string Category { get; set; } = null!;

        [AllowedValues("Remote", "Onsite", "Hybrid")]
        public string WorkArrangement { get; set; } = null!;
        public int CompanyId { get; set; }
        public string? AdditionalNotes { get; set; }
    }
}
