import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Booking, BookingSchema } from './booking.schema';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { Connection } from 'mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';
import { SearchModule } from 'src/Search/search.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Booking.name,
        useFactory: async (connection: Connection) => {
          const schema = BookingSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(AutoIncrement, { inc_field: 'bookingId' });
          return schema;
        },
      },
    ]),
    SearchModule,
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
