using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebAPI.Shared;

namespace WebAPI.Entities.Configuration
{
    public abstract class BaseIdConfiguration<TEntity> : IEntityTypeConfiguration<TEntity>
        where TEntity : class, IBaseId
    {
        public virtual void Configure(EntityTypeBuilder<TEntity> builder)
        {
            builder.HasKey(e => e.Id);
        }
    }

    public abstract class BaseAuditConfiguration<TEntity> : BaseIdConfiguration<TEntity>
        where TEntity: class, IBaseIdWithAudit
    {
        public override void Configure(EntityTypeBuilder<TEntity> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.CreatedOn).IsRequired();
            builder.Property(e => e.ModifiedOn).IsRequired(false);
        }
    }
}
