import { Controller, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingRequestDto, PassengerRequest } from './booking-request.dto';
import { BookingResponseDto } from './booking-response..dto';
import { BookingFormDto } from './booking-form.dto';

@Controller('flight/booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async bookFlight(req: BookingRequestDto): Promise<BookingResponseDto> {
    const form = new BookingFormDto({
      flightId: req.fid,
      contactName: req.cn,
      contactPhone: req.cp,
      contactEmail: req.ce,
      passengers: req.p.map((p) => ({
        title: PassengerRequest.convertTitle(p.t),
        name: p.n,
        type: PassengerRequest.convertType(p.tp),
      })),
    });

    const result = await this.bookingService.bookFlight(form);

    const response = new BookingResponseDto({
      bid: result.bookingId,
      pa: result.paymentAccount,
      pt: result.paymentTotal,
    });

    return response;
  }
}
