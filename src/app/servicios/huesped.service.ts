import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Huesped } from 'src/app/clases/huesped';

@Injectable({
  providedIn: 'root'
})
export class HuespedService {

  private url: string = "http://localhost:8080/";
  
  constructor( private http: HttpClient ) {}
    
  findAll(): Observable<Huesped[]>{
    return  this.http.get<Huesped[]>(this.url)
  }
}
