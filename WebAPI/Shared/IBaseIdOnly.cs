namespace WebAPI.Shared
{
    public abstract class BaseIdOnly : IBaseId
    {
        public int Id { get; set; }
    }
}
