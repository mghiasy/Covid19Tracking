import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SummaryObj } from './summary-obj';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherServiceService {

  //we need to inject httpClinet to service to use get/post/... methods
  constructor(private _http : HttpClient) { }
  fetchGlobalSummary(): Observable<any>{
    //cause we are getting the data
    //search for Covid19 rest endpoint


    //service should return onbject of type Observable of type any (globale)=> in ts file should subscribe to get data
    console.log("service called");
    //better to use any instead of SummarObj as genericType
    return this._http.get<any>("https://api.covid19api.com/summary")
  };
}
