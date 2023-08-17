import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FlightInventoryDocument = HydratedDocument<FlightInventory>;

@Schema()
export class FlightInventory {
  @Prop()
  id: number;

  @Prop()
  origin: string;

  @Prop()
  destination: string;

  @Prop()
  departure: Date;

  @Prop()
  arrival: Date;

  @Prop()
  airline: string;

  @Prop()
  quota: number;

  @Prop()
  price: number;
}

export const FlightInventorySchema =
  SchemaFactory.createForClass(FlightInventory);
