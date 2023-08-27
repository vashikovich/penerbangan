import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchFlightRequestDto } from './search-flight-request.dto';
import { SearchFlightQueryDto } from './search-flight-query.dto';
import { SearchFlightResponseDto } from './search-flight-response.dto';

@Controller('flight/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async searchFlight(
    @Query() q: SearchFlightRequestDto,
  ): Promise<SearchFlightResponseDto[]> {
    const query = new SearchFlightQueryDto({
      origin: q.o,
      destination: q.d,
      date: q.dt,
      adultCount: q.a,
      childCount: q.c,
      infantCount: q.i,
    });

    const result = await this.searchService.searchFlight(query);

    const response = result.map(
      (r) =>
        new SearchFlightResponseDto({
          id: r.id,
          o: r.origin,
          d: r.destination,
          dp: r.departure,
          ar: r.arrival,
          a: r.airline,
          p: r.price,
        }),
    );

    return response;
  }
}
