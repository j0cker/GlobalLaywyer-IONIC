import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  correo: any;
  password1: any;
  password2: any;
  serviceT: any;

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  service_type(correo: any, password1: any, password2: any, serviceT: any) {

    console.log('correo: ' + correo);
    console.log('pass1: ' + password1);
    console.log('pass2: ' + password2);
    console.log('service tpy: ' + serviceT);

    const esMail = this.isEmail(correo);
    // tslint:disable-next-line: no-conditional-assignment
    if (esMail === true) {
      console.log('[Registro][signin] Si es un correo válido');
      // tslint:disable-next-line: triple-equals
      if (serviceT == 0) {
        console.log('Busco');
        if (password1 === password2) {
          this.router.navigate( ['/registro-user', correo, password1] );
        } else {
          console.log('Ocurrio un error');
        }
     // tslint:disable-next-line: triple-equals
     } else if (serviceT == 1) {
        console.log('Ofrezco');
        if (password1 === password2) {
         this.router.navigate( ['/registro-law', correo, password1] );
        } else {
          console.log('Ocurrio un error');
        }
     }
    } else {
        console.log('Ingresar un email válido');
        this.mail();
    }
    // console.log($event.detail.checked);
    // tslint:disable-next-line: triple-equals
  }

   // tslint:disable-next-line: max-line-length
   isEmail(correo: any): boolean {
    let  serchfind: boolean;
    let regexp: any;

    // tslint:disable-next-line: max-line-length
    regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    serchfind = regexp.test(correo);

    console.log(serchfind);
    return serchfind;
  }

  async mail() {
    const toast = await this.toastController.create({
      message: 'Ingresar un correo válido',
      duration: 4000,
      color: 'danger',
      position: 'bottom',
    });
    toast.present();
  }

}
