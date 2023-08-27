import { Module } from '@nestjs/common';
import { SearchModule } from './Search/search.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingModule } from './Booking/booking.module';

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.MONGO_CONNSTRING),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/flight'),
    SearchModule,
    BookingModule,
  ],
})
export class AppModule {}
