import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

import { tap } from 'rxjs/operators';
import { Componente } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // api = 'http://api.bullandbear-legalpartners.com/api/';
  api = 'http://127.0.0.1:8000/api/';

  constructor( private http: HttpClient, public toastController: ToastController) { }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getProfileSettings() {
    return this.http.get<Componente[]>('/assets/data/profileSettings.json');
  }

  getUserSettings() {
    return this.http.get<Componente[]>('/assets/data/userSettings.json');
  }

  getPost(serviceT: any, emailModel: string, passModel: string) {
    // console.log('Data service entro');
    // this.alerta();
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'ingresar?serviceT=' + serviceT + '&correo=' + emailModel + '&contPass=' + passModel).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  getUserProfile(token: string, id_user: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][getUserProfile]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'normal_user/getProfile?token=' + token + '&id_user=' + id_user).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  getProfile(token: string, id_user: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][getProfile]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'lawyer/getProfile?token=' + token + '&id_user=' + id_user).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  userPost(nombre: string, apellido: string, correo: string, telefono: any, cel: any, pass: string) {
    // tslint:disable-next-line: max-line-length
    console.log('DataService userPost');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'normal_user/registrar?nombre=' + nombre + '&apellido=' + apellido + '&correo=' + correo + '&telefono=' + telefono + '&cel=' + cel + '&pass=' + pass).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  // tslint:disable-next-line: max-line-length
  regLaw(correo: any, password: any, cedula: any, nombre: any, apellido: any, disponibilidad: any, celular: any, idiomas: any, diasLaborales: any, hEntrada: any, hSalida: any, address: any, long: any, lat: any, escuela: any, carrera: any, mesTermino: any, anoTermino: any) {
    // tslint:disable-next-line: max-line-length
    console.log('DataService userPost');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'lawyer/registrar?correo=' + correo + '&password=' + password + '&cedula=' + cedula + '&nombre=' + nombre + '&apellido=' + apellido + '&disponibilidad=' + disponibilidad + '&celular=' + celular + '&idiomas=' + idiomas + '&diasLaborales=' + diasLaborales + '&hEntrada=' + hEntrada + '&hSalida=' + hSalida + '&address=' + address + '&long=' + long + '&lat=' + lat + '&escuela=' + escuela + '&carrera=' + carrera + '&mesTermino=' + mesTermino + '&anoTermino=' + anoTermino).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  verifyCedula(cedula: any) {
    // tslint:disable-next-line: max-line-length
    console.log('DataService verifyCedula');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'normal_user/verifyCedula?cedula=' + cedula).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  abogadosCards() {
    // tslint:disable-next-line: max-line-length
    console.log('DataService abogadosCards');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'lawyer/abogadosCards').pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  // tslint:disable-next-line: max-line-length
  sendSMS(celular: any) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][verifyCode]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'enviarsms?celular=' + celular).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  // tslint:disable-next-line: max-line-length
  verifyCode(code: any, celular: any) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][verifyCode]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'verifyCode?code=' + code + '&celular=' + celular).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

}
