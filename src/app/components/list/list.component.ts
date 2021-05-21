import { Component, OnInit } from '@angular/core';
import { DatoService } from '../../services/dato.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private dS : DatoService) { }

  ngOnInit(): void {
   this.dS.getCookie('Datos');
  }

}
