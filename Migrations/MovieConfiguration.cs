using Chloe.Server.Data;
using Chloe.Server.Models;
using System.Linq;

namespace Chloe.Migrations
{
    public class MovieConfiguration
    {
        public static void Seed(ChloeContext context) {

            if(context.Movies.ToList().Count < 1)
            {
                context.Movies.Add(new Movie() {
                    Name = "Batman V Superman: Dawn Of Justice",
                    Priority = 1                     
                });

                context.Movies.Add(new Movie() {
                    Name = "My Big Fat Greek Wedding 2",
                    Priority = 2
                });

                context.Movies.Add(new Movie() {
                    Name = "Zootopia",
                    Priority = 3
                });

                context.Movies.Add(new Movie() {
                    Name = "The Divergent Series: Allegiant",
                    Priority = 4
                });

                context.Movies.Add(new Movie() {
                    Name = "Deadpool",
                    Priority = null
                });

                context.Movies.Add(new Movie() {
                    Name = "Eye In The Sky",
                    Priority = null
                });

                context.Movies.Add(new Movie() {
                    Name = "10 Cloverfield Lane",
                    Priority = null
                });

                context.Movies.Add(new Movie() {
                    Name = "London Has Fallen",
                    Priority = null
                });

                context.Movies.Add(new Movie() {
                    Name = "Miracles From Heaven",
                    Priority = null
                });

                context.Movies.Add(new Movie() {
                    Name = "God's Not Dead 2",
                    Priority = null
                });
            }
        }
    }
}