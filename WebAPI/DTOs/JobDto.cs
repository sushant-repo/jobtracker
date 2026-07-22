using System.ComponentModel.DataAnnotations;

namespace WebAPI.DTOs
{
    public class JobDto
    {
        [Required]
        [MaxLength(100)]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        public WorkArrangementEnum WorkArrangement { get; set; }
        public string Category { get; set; } = null!;
    }
}

public enum WorkArrangementEnum
{
    Remote,
    Hybrid,
    Onsite
}

