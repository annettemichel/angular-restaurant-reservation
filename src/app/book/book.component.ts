import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit{

  reservations: Book[] = [];
  newReservationTitle: string = "";
  newReservationAuthor: string = "";

  ngOnInit(): void {
    let storedReservations = localStorage.getItem("reservations")
    this.reservations = storedReservations ? JSON.parse(storedReservations) : []
  }

  addReservation() {
    if(this.newReservationTitle.trim().length && this.newReservationAuthor.trim().length){
      let newReservation: Book = {
        id: Date.now(),
        title: this.newReservationTitle,
        author: this.newReservationAuthor
      }
      this.reservations.push(newReservation);

      //Reset the form
      this.newReservationTitle = "";
      this.newReservationAuthor = "";

      //Add data to local-storage
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
    }
  }
  deleteReservation(index:number){
    this.reservations.splice(index, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
}
