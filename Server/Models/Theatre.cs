
using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class Theatre:BaseEntity
    {
        public Theatre()
        {
            this.Movies = new HashSet<Movie>();
        }

        public ICollection<Movie> Movies { get; set; }
    }
}