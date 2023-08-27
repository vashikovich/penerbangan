import { Injectable } from '@nestjs/common';
import { BookingResultDto } from './booking-result.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from './booking.schema';
import { Model } from 'mongoose';
import { BookingFormDto, Passenger } from './booking-form.dto';
import { FlightInventory } from 'src/Search/flight-inventory.schema';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    @InjectModel(FlightInventory.name)
    private flightInventoryModel: Model<FlightInventory>,
  ) {}

  async bookFlight(form: BookingFormDto): Promise<BookingResultDto> {
    const booking = new Booking({
      flightId: form.flightId,
      contactName: form.contactName,
      contactPhone: form.contactPhone,
      contactemail: form.contactEmail,
      passengers: form.passengers.map((p) => ({
        name: p.name,
        title: p.title,
        type: p.type,
      })),
      paymentTotal: await this.calcTotalPrice(form.flightId, form.passengers),
    });
    const saved = await this.bookingModel.create(booking);
    const result = saved as BookingResultDto;

    return result;
  }

  async calcTotalPrice(flightId: number, passengers: Passenger[]) {
    const flightInventory = await this.flightInventoryModel.findOne({
      id: flightId,
    });
    const count = passengers.filter((p) => p.type !== 'INFANT').length;
    const totalPrice = count * flightInventory.price;
    return totalPrice;
  }
}
