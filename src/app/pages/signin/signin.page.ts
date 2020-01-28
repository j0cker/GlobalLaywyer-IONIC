import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  loading: any;

  correo: any;
  password1: any;
  password2: any;
  serviceT: any;

  constructor(private router: Router, public toastController: ToastController, private loadingCtrl: LoadingController) { }

  ngOnInit() {

  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message
    });
    await this.loading.present();
  }

  dissmissLoading() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  service_type(correo: any, password1: any, password2: any, serviceT: any) {

    // tslint:disable-next-line: max-line-length
    if (correo === '' || correo === undefined || password1 == '' || password1 === undefined || password2 === '' || password2 === undefined || serviceT === undefined) {
      this.completo();
    } else {

      // console.log('correo: ' + correo);
      // console.log('pass1: ' + password1);
      // console.log('pass2: ' + password2);
      // console.log('service tpy: ' + serviceT);

      this.presentLoading('Por favor espere');

      const esMail = this.isEmail(correo);
      // tslint:disable-next-line: no-conditional-assignment
      if (esMail === true) {
        console.log('[Registro][signin] Si es un correo válido');
        // tslint:disable-next-line: triple-equals
        if (serviceT == 0) {
          console.log('Busco');
          if (password1 === password2) {
            this.router.navigate( ['/registro-user', correo, password1] );
            this.dissmissLoading();
          } else {
            // console.log('Ocurrio un error');
            this.dissmissLoading();
          }
        // tslint:disable-next-line: triple-equals
        } else if (serviceT == 1) {
            console.log('Ofrezco');
            if (password1 === password2) {
              this.router.navigate( ['/registro-law', correo, password1] );
              this.dissmissLoading();
            } else {
              // console.log('Ocurrio un error');
              this.dissmissLoading();
            }
        }
      } else {
          this.mail();
          this.dissmissLoading();
      }

    }

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
      color: 'dark',
      position: 'bottom',
    });
    toast.present();
  }

  async completo() {
    const toast = await this.toastController.create({
      message: 'LLenar todos los campos',
      duration: 4000,
      color: 'dark',
      position: 'bottom',
    });
    toast.present();
  }

}
