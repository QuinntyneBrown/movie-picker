using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class MovieDto
    {
        public MovieDto(Movie entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public MovieDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
