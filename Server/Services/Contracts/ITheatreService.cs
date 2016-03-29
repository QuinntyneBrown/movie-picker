using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ITheatreService
    {
        TheatreAddOrUpdateResponseDto AddOrUpdate(TheatreAddOrUpdateRequestDto request);
        ICollection<TheatreDto> Get();
        TheatreDto GetById(int id);
        dynamic Remove(int id);
    }
}
