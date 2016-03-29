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
    public class TheatreService : ITheatreService
    {
        public TheatreService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Theatres;
            this.cache = cacheProvider.GetCache();
        }

        public TheatreAddOrUpdateResponseDto AddOrUpdate(TheatreAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Theatre());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new TheatreAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<TheatreDto> Get()
        {
            ICollection<TheatreDto> response = new HashSet<TheatreDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new TheatreDto(entity)); }    
            return response;
        }


        public TheatreDto GetById(int id)
        {
            return new TheatreDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Theatre> repository;
        protected readonly ICache cache;
    }
}
