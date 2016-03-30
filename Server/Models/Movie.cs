using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class Movie:BaseEntity
    {
        public Movie()
        {
            this.Theatres = new HashSet<Theatre>();
        }

        public int? Priority { get; set; }

        public ICollection<Theatre> Theatres { get; set; }
    }
}