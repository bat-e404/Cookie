import { Component, OnInit } from '@angular/core';
import { DatoService } from '../../services/dato.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private dS : DatoService) { }

  ngOnInit(): void {
  }
  addCookie(
    name: string,
    ape: string,
    email: string,
    facu: string,
    carrera: string
  ){
    this.dS.addCookie(
      {
        name: name,
        apellido: ape,
        email: email,
        facu: facu,
        carrera: carrera
      }
      );
  }
}
