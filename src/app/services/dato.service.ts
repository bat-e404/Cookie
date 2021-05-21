import { Injectable } from '@angular/core';
import { Cookie } from '../model/Cookie';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class DatoService {
  
  constructor(private cookieService : CookieService) {
  
   }
  addCookie(dC : Cookie){
    this.cookieService.set('Datos', JSON.stringify(dC), 1);
    console.log('Se creo una Cookie');
    this.cookieService.get('Datos');
    
  }
  getCookie(nameCookie:string){
    let info = this.cookieService.get(nameCookie);
    let datos = new RegExp('/([A-Z])\w+|[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-z]+/g',info);

  }
}
