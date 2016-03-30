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
            this.Priority = entity.Priority;
            this.Theatres = new HashSet<TheatreDto>();
            foreach(var theatre in entity.Theatres)
            {
                this.Theatres.Add(new TheatreDto(theatre));
            }
        }

        public MovieDto()
        {
            this.Theatres = new HashSet<TheatreDto>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<TheatreDto> Theatres { get;set;}
        public int? Priority { get; set; }
    }
}
