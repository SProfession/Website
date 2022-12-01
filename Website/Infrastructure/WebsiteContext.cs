using Microsoft.EntityFrameworkCore;
using Website.Infrastructure.Graph;

namespace Website.Infrastructure
{
    public class WebsiteContext: DbContext
    {
        protected override void OnConfiguring
       (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "GraphDB");
        }
        public DbSet<GraphDataPoint> GraphDataPoints { get; set; }
    }
}