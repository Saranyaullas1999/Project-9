import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  carsView=()=>{
    return this.http.get("https://myfakeapi.com/api/cars")
  }
}
