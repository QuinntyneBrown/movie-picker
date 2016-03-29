using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TheatreDto
    {
        public TheatreDto(Theatre entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public TheatreDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
