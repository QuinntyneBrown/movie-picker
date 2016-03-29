using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IMovieService
    {
        MovieAddOrUpdateResponseDto AddOrUpdate(MovieAddOrUpdateRequestDto request);
        ICollection<MovieDto> Get();
        MovieDto GetById(int id);
        dynamic Remove(int id);
    }
}
