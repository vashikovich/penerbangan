import { PassengerTitle, PassengerType } from './booking-form.dto';

export class BookingRequestDto {
  fid: number;
  cn: string;
  cp: string;
  ce: string;
  p: PassengerRequest[];
}

export class PassengerRequest {
  static convertType = (req: number): PassengerType => {
    switch (req) {
      case 0:
        return 'ADULT';
      case 1:
        return 'CHILD';
      case 2:
        return 'INFANT';
      default:
        return null;
    }
  };

  static convertTitle = (req: number): PassengerTitle => {
    switch (req) {
      case 0:
        return 'MR';
      case 1:
        return 'MRS';
      case 2:
        return 'MS';
      default:
        return null;
    }
  };

  t: number;
  n: string;
  tp: number;
}
