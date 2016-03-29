using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class MovieAddOrUpdateResponseDto: MovieDto
    {
        public MovieAddOrUpdateResponseDto(Movie entity)
            :base(entity)
        {

        }
    }
}
