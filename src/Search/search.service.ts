import { Injectable } from '@nestjs/common';
import { SearchFlightDto } from './search-flight.dto';
import { FlightInventory } from './flight-inventory.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import moment from 'moment';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(FlightInventory.name)
    private flightInventoryModel: Model<FlightInventory>,
  ) {}

  async searchFlight(input: SearchFlightDto): Promise<FlightInventory[]> {
    const result = await this.flightInventoryModel.find({
      origin: input.origin,
      destination: input.destination,
      departure: {
        $gte: moment(input.date).format(),
        $lt: moment(input.date).add(1, 'day').format(),
      },
      quota: { $gte: input.adultCount + input.childCount },
    });
    return result;
  }
}
