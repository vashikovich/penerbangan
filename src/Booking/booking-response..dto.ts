export class BookingResponseDto {
  constructor(init: Partial<BookingResponseDto>) {
    Object.assign(this, init);
  }

  bid: number;
  pa: string;
  pt: number;
}
