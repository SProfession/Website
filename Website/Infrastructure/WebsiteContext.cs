using Microsoft.EntityFrameworkCore;

namespace Website.Infrastructure
{
    public class WebsiteContext: DbContext
    {
        protected override void OnConfiguring
       (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "GraphDB");
        }
    }
}