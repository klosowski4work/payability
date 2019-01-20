import { Guest } from "./../interfaces/guest.interface";
import { Gender } from "src/app/enums/gender.enum";

export class GuestModel {
    name: string;
    originCountry: string;
    language: string;
    age: number;
    gender: Gender;

    constructor(data: Guest) {
        this.name = data.name;
        this.originCountry = data.originCountry;
        this.language = data.language;
        this.age = data.age;
        this.gender = data.gender;
    }
    
}