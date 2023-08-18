import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {
  constructor(init: Partial<Booking>) {
    Object.assign(this, init);
  }

  @Prop()
  bookingId: number;

  @Prop()
  flightId: number;

  @Prop()
  contactName: string;

  @Prop()
  contactPhone: string;

  @Prop()
  contactemail: string;

  @Prop()
  passengers: Passenger[];

  @Prop()
  paymentAccount: string;

  @Prop()
  paymentTotal: number;
}

@Schema()
export class Passenger {
  @Prop()
  title: string;

  @Prop()
  name: string;

  @Prop()
  type: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
