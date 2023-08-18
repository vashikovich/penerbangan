export class BookingFormDto {
  constructor(init: Partial<BookingFormDto>) {
    Object.assign(this, init);
  }

  flightId: number;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  passengers: Passenger[];
}

export class Passenger {
  title: PassengerTitle;
  name: string;
  type: PassengerType;
}

export type PassengerTitle = 'MR' | 'MRS' | 'MS';
export type PassengerType = 'ADULT' | 'CHILD' | 'INFANT';
