using WebAPI.Shared;

namespace WebAPI.Entities
{
    public class ApplicationStatus : BaseIdOnly
    {
        public string Code { get; set; } = null!;
        public string Title { get; set; } = null!;
    }
}
