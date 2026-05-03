using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WebAPI.Entities.Configuration
{
    public class ApplicationStatusConfiguration : IEntityTypeConfiguration<ApplicationStatus>
    {
        public void Configure(EntityTypeBuilder<ApplicationStatus> entity)
        {
            entity.ToTable("ApplicationStatuses");

            entity.Property(e => e.Code).IsRequired().HasMaxLength(50);
            entity.Property(e => e.Title).IsRequired().HasMaxLength(100);
            
            entity.HasData(
                new ApplicationStatus { Id = 1, Code = "SUBMITTED", Title = "Application Submitted" },
                new ApplicationStatus { Id = 2, Code = "INTERVIEW", Title = "In Interview" },
                new ApplicationStatus { Id = 3, Code = "OFFERED", Title = "Job Offered" },
                new ApplicationStatus { Id = 4, Code = "ACCEPTED", Title = "Offer Accepted" },
                new ApplicationStatus { Id = 5, Code = "DECLINED", Title = "Offer Declined" },
                new ApplicationStatus { Id = 6, Code = "CLOSED", Title = "Application Closed" }
            );
        }
    }
}
