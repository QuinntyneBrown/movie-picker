using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<User> Users { get; }
        IRepository<Movie> Movies { get; }
        IRepository<Theatre> Theatres { get; }

        void SaveChanges();
    }
}
