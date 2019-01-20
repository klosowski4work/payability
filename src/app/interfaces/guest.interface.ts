import { Gender } from './../enums/gender.enum';

export interface Guest {
  name?: string;
  originCountry?: string;
  language?: string;
  age?: number;
  gender?: Gender;
}
