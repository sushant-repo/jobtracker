using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WebAPI.Entities.Configuration
{
    public class JobConfiguration : IEntityTypeConfiguration<Job>
    {
        public void Configure(EntityTypeBuilder<Job> entity)
        {
            entity.ToTable("Jobs");

            entity.Property(j => j.Title).IsRequired().HasMaxLength(200);
            entity.Property(j => j.Description).IsRequired();

            entity.Property(j => j.JobURL).IsRequired();

            entity.HasOne<ApplicationStatus>()
                .WithMany()
                .HasForeignKey(j => j.StatusId)
                .OnDelete(DeleteBehavior.Restrict);

            entity.HasOne<Company>()
                .WithMany()
                .HasForeignKey(j => j.CompanyId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
