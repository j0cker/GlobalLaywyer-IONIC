import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailModel: string;
  passModel: string;
  userData: any;

  serviceT: any;

  constructor( private dataService: DataService, public toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  entrar(emailModel: any, passModel: any, serviceT: any) {
    console.log('Email: ' + this.emailModel);
    console.log('Password: ' + this.passModel);

    // tslint:disable-next-line: triple-equals
    if (serviceT == 0) {
      console.log('Busco');

      this.dataService.getPost(serviceT, this.emailModel, this.passModel)
        .subscribe( (data: any) => {

          console.log('[Verify][UserPost] Data: ' + data);
          console.log('[Verify][UserPost] success: ' + data.success);
          console.log('[Verify][UserPost] Token: ' + data.token);
          console.log('[Verify][UserPost] Usuario: ' + data.data[0].id_usuarios);

          localStorage.setItem('idUsuario', data.data[0].id_usuarios);
          localStorage.setItem('Token', data.token);

          // console.log('success: ' + data.success);
          // this.userData = data;
          // tslint:disable-next-line: triple-equals
          if (data.success == 'TRUE') {
            this.router.navigate( ['/tabs/dashboard-user'] );
            this.bien();
          } else {
            this.mal(data.description);
          }

        }, ( error ) => {
          console.log(error);
          this.userData = 'Este es el error: ' + error.toString();
          this.mal(error);
        });

   // tslint:disable-next-line: triple-equals
   } else if (serviceT == 1) {
      console.log('Ofrezco');

      this.dataService.getPost(serviceT, this.emailModel, this.passModel)
        .subscribe( (data: any) => {

          console.log('[Verify][UserPost] Data: ' + data);
          console.log('[Verify][UserPost] success: ' + data.success);
          console.log('[Verify][UserPost] Token: ' + data.token);
          console.log('[Verify][UserPost] Usuario: ' + data.data[0].id_abogado);

          localStorage.setItem('idUsuario', data.data[0].id_abogado);
          localStorage.setItem('Token', data.token);

          // console.log('success: ' + data.success);
          // this.userData = data;
          // tslint:disable-next-line: triple-equals
          if (data.success == 'TRUE') {
            this.router.navigate( ['/tabs-law/home'] );
            this.bien();
          } else {
            this.mal(data.description);
          }

        }, ( error ) => {
          console.log(error);
          this.userData = 'Este es el error: ' + error.toString();
          this.mal(error);
        });
   }

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
      color: 'danger',
      position: 'bottom'
    });
    toast.present();
  }

}
