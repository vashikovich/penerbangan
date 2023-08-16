export class SearchFlightResponseDto {
  constructor(init: Partial<SearchFlightResponseDto>) {
    Object.assign(this, init);
  }

  id: number;
  o: string;
  d: string;
  dt: Date;
  a: string;
  p: number;
}
