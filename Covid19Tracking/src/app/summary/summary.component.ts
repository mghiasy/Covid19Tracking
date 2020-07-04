import { Component, OnInit } from '@angular/core';
import { SummaryObj } from '../summary-obj';
import { DataFetcherServiceService } from '../data-fetcher-service.service';
import { Observable } from 'rxjs';
import { Countries } from '../countries';
import { Country } from '../country';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
 public summaryObj = new SummaryObj();
 //define variable of type array of country
 countryList = new Countries();
 //for instantiation , not to do actual work
  constructor(private _service : DataFetcherServiceService) { }
  
// It is invoked only once when the directive after instantiation. 
//Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. 
//The constructor should only be used to initialize class members but shouldn't do actual "work".

  ngOnInit(): void {
    console.log("onInit");
    this._service.fetchGlobalSummary().subscribe(
      data=>{
        //subscribe method has 2 param of data & error
        console.log("received successfully"+data)
        //summary data is in global obj
        // this.summaryObj.NewConfirmed=data.Global.NewConfirmed;
        //accessed in UI by {{double coli bracket}}
        this.summaryObj=data.Global;
        this.countryList=data.countries;
        console.log("received successfully"+this.countryList)
      },
      error => console.log("error occured")
    )
  }
  applyFilter(){
    console.log("applyfilter");
   
  }

}
