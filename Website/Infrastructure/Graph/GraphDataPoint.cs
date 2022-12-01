using Website.Domain;

namespace Website.Infrastructure.Graph
{
    public class GraphDataPoint : Entity
    {
        public new Guid Id {get; set;}
        public decimal Value {get; set;}
        public DateTime CreateDate {get;set;}
    }
}