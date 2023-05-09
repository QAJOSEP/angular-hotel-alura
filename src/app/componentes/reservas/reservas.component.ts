import { Component } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})

export class ReservasComponent {
  
  checkinDate: Date;
  checkoutDate: Date;

  constructor (){
    this.checkinDate = new Date();
    this.checkoutDate = new Date();

  }
  calculateTotal() {
    const ONE_DAY = 1000 * 60 * 60 * 24; // Milisegundos en un día
    const diffInTime = this.checkoutDate.getTime() - this.checkinDate.getTime(); // Diferencia en milisegundos
    const diffInDays = diffInTime / ONE_DAY; // Diferencia en días
    const pricePerDay = 20;
    const totalPrice = diffInDays * pricePerDay;

    return totalPrice;
  }
  
  
}
