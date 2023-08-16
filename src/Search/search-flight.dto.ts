export class SearchFlightDto {
  constructor(init: Partial<SearchFlightDto>) {
    Object.assign(this, init);
  }

  origin: string;
  destination: string;
  date: Date;
  adultCount: number;
  childCount: number;
  infantCount: number;
}
