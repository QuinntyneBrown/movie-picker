using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TheatreAddOrUpdateResponseDto: TheatreDto
    {
        public TheatreAddOrUpdateResponseDto(Theatre entity)
            :base(entity)
        {

        }
    }
}
