using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class MovieService : IMovieService
    {
        public MovieService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Movies;
            this.cache = cacheProvider.GetCache();
        }

        public MovieAddOrUpdateResponseDto AddOrUpdate(MovieAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Movie());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new MovieAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<MovieDto> Get()
        {
            ICollection<MovieDto> response = new HashSet<MovieDto>();
            var entities = repository.GetAll()
                .Include(x=>x.Theatres)
                .Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new MovieDto(entity)); }    
            return response;
        }


        public MovieDto GetById(int id)
        {
            return new MovieDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Movie> repository;
        protected readonly ICache cache;
    }
}
