import { Component, OnInit } from '@angular/core';
import { Huesped } from 'src/app/clases/huesped';
import { HuespedService } from 'src/app/servicios/huesped.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{
  
  huespedes: Huesped[];

  constructor(private huespedService : HuespedService){

  }

  ngOnInit(): void {
    this.huespedService.findAll().subscribe(data =>{
      this.huespedes = data;
      console.log(data);
    });
  } 
 
}
