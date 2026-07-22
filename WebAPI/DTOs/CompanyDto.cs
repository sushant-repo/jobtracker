using System.ComponentModel.DataAnnotations;

namespace WebAPI.DTOs
{
    public class CompanyDto
    {
        [Required]
        public string Name { get; set; } = string.Empty;
        public string? Url { get; set; }
        [Required]
        public string Location { get; set; } = string.Empty;
    }
}
