import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Booking, BookingSchema } from './booking.schema';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { SearchModule } from 'src/Search/search.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
    SearchModule,
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
