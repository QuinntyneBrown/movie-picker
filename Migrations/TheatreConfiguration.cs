using Chloe.Server.Data;
using Chloe.Server.Models;
using System.Linq;

namespace Chloe.Migrations
{
    public class TheatreConfiguration
    {
        public static void Seed(ChloeContext context)
        {
            if(context.Theatres.ToList().Count < 1)
            {
                context.Theatres.Add(new Theatre() { Name = "Cineplex Cinemas Yonge-Dundas and VIP" });
                context.Theatres.Add(new Theatre() { Name = "Scotiabank Theatre Toronto" });
                context.Theatres.Add(new Theatre() { Name = "The Beach Cinemas - Alliance Cinemas" });
                context.Theatres.Add(new Theatre() { Name = "Famous Players Canada Square Cinemas" });
                context.Theatres.Add(new Theatre() { Name = "Cineplex Cinemas Yonge-Eglinton and VIP " });
                context.Theatres.Add(new Theatre() { Name = "Cineplex VIP Cinemas Don Mills" });
                context.Theatres.Add(new Theatre() { Name = "Cineplex Cinemas Yorkdale" });
                context.Theatres.Add(new Theatre() { Name = "Cineplex Odeon Eglinton Town Centre Cinemas" });
                context.Theatres.Add(new Theatre() { Name = "Cineplex Cinemas Queensway and VIP" });
                context.Theatres.Add(new Theatre() { Name = "Cineplex Cinemas Empress Walk" });
                context.Theatres.Add(new Theatre() { Name = "SilverCity Fairview Mall Cinemas" });
                context.Theatres.Add(new Theatre() { Name = "Cineplex Cinemas Scarborough" });
                context.Theatres.Add(new Theatre() { Name = "Cineplex Cinemas Vaughan" });
            }

            context.SaveChanges();
        }
    }
}