import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FlightInventory,
  FlightInventorySchema,
} from './flight-inventory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FlightInventory.name, schema: FlightInventorySchema },
    ]),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
