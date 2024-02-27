using Microsoft.EntityFrameworkCore;

namespace WebApiPaymentCrud.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<PaymentDetail> PaymentDetails { get; set; }

    }
}
