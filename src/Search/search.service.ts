import { Injectable } from '@nestjs/common';
import { SearchFlightQueryDto } from './search-flight-query.dto';
import { FlightInventory } from './flight-inventory.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(FlightInventory.name)
    private flightInventoryModel: Model<FlightInventory>,
  ) {}

  async searchFlight(input: SearchFlightQueryDto): Promise<FlightInventory[]> {
    const result = await this.flightInventoryModel.find({
      origin: input.origin,
      destination: input.destination,
      $and: [
        { departure: { $gte: moment(input.date).format() } },
        {
          departure: { $lt: moment(input.date).add(1, 'day').format() },
        },
      ],
      quota: { $gte: input.adultCount + input.childCount },
    });
    return result;
  }
}
