import { Controller, Get } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchFlightRequestDto } from './search-flight-request.dto';
import { SearchFlightDto } from './search-flight.dto';
import { SearchFlightResponseDto } from './search-flight-response.dto';

@Controller('flight')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async searchFlight(
    req: SearchFlightRequestDto,
  ): Promise<SearchFlightResponseDto[]> {
    const query = new SearchFlightDto({
      origin: req.o,
      destination: req.d,
      date: req.dt,
      adultCount: req.a,
      childCount: req.c,
      infantCount: req.i,
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
