using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class Movie:BaseEntity
    {
        public Movie()
        {
            this.Theatres = new HashSet<Theatre>();
        }

        public ICollection<Theatre> Theatres { get; set; }
    }
}