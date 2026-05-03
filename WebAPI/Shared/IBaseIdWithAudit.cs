using System.ComponentModel.DataAnnotations;

namespace WebAPI.Shared
{
    public interface IAudit
    {
        DateTime CreatedOn { get; set; }
        DateTime? ModifiedOn { get; set; }
    }

    public interface IBaseId
    {
        int Id { get; set; }
    }

    public interface IBaseIdWithAudit : IBaseId, IAudit
    {
    }



    public abstract class BaseIdWithAudit : IBaseIdWithAudit
    {
        [Key]
        public int Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime? ModifiedOn { get; set; }
    }



}
