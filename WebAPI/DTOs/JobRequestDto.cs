namespace WebAPI.DTOs
{
    public class JobRequestDto
    {
        public JobDto Job { get; set; } = null!;
        public CompanyDto Company { get; set; } = null!;
    }
}
