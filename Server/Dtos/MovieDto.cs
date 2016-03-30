using Chloe.Server.Models;
using System.Collections;
using System.Collections.Generic;

namespace Chloe.Server.Dtos
{
    public class MovieDto
    {
        public MovieDto(Movie entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;

            this.Theatres = new HashSet<TheatreDto>();
        }

        public MovieDto()
        {
            this.Theatres = new HashSet<TheatreDto>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<TheatreDto> Theatres { get;set;}
    }
}
