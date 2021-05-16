import { Injectable } from '@angular/core';
//By adding the HttpClientModule to our imports, we are making the functionality that is necessary to make
// HTTP requests available throughout the application.
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  //Added the HttpClient into the constructor to make HTTP requests.
  constructor(public httpClient: HttpClient) { }

//Http returns observable. This means application can continue running while another request is running in background
  getThisYearData(): Observable<any> {
    //retrieving data from json blob.
    return this.httpClient.get('https://api.themoviedb.org/3/movie/550?api_key=509c674d5f625caf3ab87339b0e484e5');
    
  }

  getDecadeData(): Observable<any> {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/550?api_key=509c674d5f625caf3ab87339b0e484e5');
  }
}
