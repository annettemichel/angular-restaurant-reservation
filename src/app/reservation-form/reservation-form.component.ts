import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../reservation/reservation.service";
import {Reservation} from "../models/reservation";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent implements OnInit{
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService) {
  }
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      reservationDate: ['', Validators.required],
      reservationTime: ['', Validators.required],
      reservationFirstName: ['', Validators.required],
      reservationLastName: ['', Validators.required],
      reservationEmail: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    if(this.reservationForm.valid){
      let newReservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(newReservation);
    }
  }
}
