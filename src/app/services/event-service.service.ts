import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  URL:string="http://localhost:8080"

  constructor(private http:HttpClient) { }


  findAllEvents(): Observable<any> {
    return this.http.get(this.URL+"/getEvents");  
  }

  

  addTechmemeData(): Observable<any>{
    return this.http.get(this.URL+"/techmeme");
  }

  addComputerworldData(): Observable<any>{
    return this.http.get(this.URL+"/computeworld");
  }

  


}
