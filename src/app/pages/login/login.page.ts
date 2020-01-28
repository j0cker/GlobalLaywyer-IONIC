import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading: any;

  emailModel: string;
  passModel: string;
  userData: any;

  serviceT: any;

  // tslint:disable-next-line: max-line-length
  constructor(private dataService: DataService, public toastController: ToastController, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor espere'
    });
    await this.loading.present();
  }

  dissmissLoading() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  entrar(emailModel: any, passModel: any, serviceT: any) {

    if (emailModel === '' || emailModel === undefined || passModel == '' || passModel === undefined || serviceT === undefined) {
      this.completo();
    } else {

      const esMail = this.isEmail(emailModel);

      if (esMail === true) {

        // console.log('Email: ' + this.emailModel);
        // console.log('Password: ' + this.passModel);

        // tslint:disable-next-line: triple-equals
        if (serviceT == 0) {
          console.log('Busco');

          this.presentLoading();

          this.dataService.getPost(serviceT, this.emailModel, this.passModel)
            .subscribe( (data: any) => {

              console.log('[Verify][UserPost] Data: ' + data);
              console.log('[Verify][UserPost] success: ' + data.success);

              // tslint:disable-next-line: triple-equals
              if (data.success == 'TRUE') {
                console.log('[Verify][UserPost] Token: ' + data.token);
                console.log('[Verify][UserPost] Usuario: ' + data.data[0].id_usuarios);

                localStorage.setItem('idUsuario', data.data[0].id_usuarios);
                localStorage.setItem('Token', data.token);

                this.router.navigate( ['/tabs/dashboard-user'] );
                this.bien();
                this.dissmissLoading();
              } else {
                this.mal(data.description);
                this.dissmissLoading();
              }

            }, ( error ) => {
              console.log('Este es el error: ');
              console.log(error);

              // this.userData = 'Este es el error: ' + error.toString();
              this.mal('Revise su conexión a internet o contacte al administrador');
              this.dissmissLoading();
            });

        // tslint:disable-next-line: triple-equals
        } else if (serviceT == 1) {
          console.log('Ofrezco');

          this.presentLoading();

          this.dataService.getPost(serviceT, this.emailModel, this.passModel)
            .subscribe( (data: any) => {

              /*
              console.log('[Verify][UserPost] Data: ' + data);
              console.log('[Verify][UserPost] success: ' + data.success);
              console.log('[Verify][UserPost] Token: ' + data.token);
              console.log('[Verify][UserPost] Usuario: ' + data.data[0].id_abogado);
              */

              // tslint:disable-next-line: triple-equals
              if (data.success == 'TRUE') {
                localStorage.setItem('idUsuario', data.data[0].id_abogado);
                localStorage.setItem('Token', data.token);
                this.router.navigate( ['/tabs-law/home'] );
                this.bien();
                this.dissmissLoading();
              } else {
                this.mal(data.description);
                this.dissmissLoading();
              }

            }, ( error ) => {
              console.log('Este es el error: ');
              console.log(error);
              // this.userData = 'Este es el error: ' + error.toString();
              this.mal('Revise su conexión a internet o contacte al administrador');
              this.dissmissLoading();
            });
        }

      } else {
        console.log('Ingresar un email válido');
        this.mail();
      }

    }

  }

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

  async bien() {
    const toast = await this.toastController.create({
      message: 'Iniciando sesión',
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

}
