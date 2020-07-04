import { DatePipe } from '@angular/common'

export class Country {
    Country :string;
   // CountryCode:string;
    Date: DatePipe;
    NewConfirmed:number;
    NewDeaths:number;
    NewRecovered:number;
    //Slug:string;
    TotalConfirmed:number;
    TotalDeaths:number;
    TotalRecovered:number;
    constructor(){}
}
