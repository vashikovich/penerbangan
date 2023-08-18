export class SearchFlightQueryDto {
  constructor(init: Partial<SearchFlightQueryDto>) {
    Object.assign(this, init);
  }

  origin: string;
  destination: string;
  date: Date;
  adultCount: number;
  childCount: number;
  infantCount: number;
}
