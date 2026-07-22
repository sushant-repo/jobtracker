namespace WebAPI.DTOs
{
    public class JobResponseDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string JobUrl { get; set; }
        public string Status { get; set; }
        public string WorkArrangement { get; set; }
        public string Category { get; set; }
        public DateTime AppliedOn { get; set; }
        public string CompanyName { get; set; }
        public string CompanyUrl { get; set; }
        public string CompanyLocation { get; set; }
    }
}
