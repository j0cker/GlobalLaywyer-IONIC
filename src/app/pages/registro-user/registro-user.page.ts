import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToastController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.page.html',
  styleUrls: ['./registro-user.page.scss'],
})
export class RegistroUserPage implements OnInit {

  loading: any;

  user: any;
  nombre: any;
  apellido: any;
  correo: any;
  telefono: any;
  cel: any;

  label = 'medium';
  flag1: boolean; flag2: boolean;
  hide1 = true; hide2 = true;

  // tslint:disable-next-line: max-line-length
  constructor(private router: ActivatedRoute, private router2: Router, private dataService: DataService, public toastController: ToastController, private loadingCtrl: LoadingController) {
    this.router.params.subscribe((params: any) => {
      console.log(params);
      this.user = params;
      this.correo = this.user.correo;
    });
  }

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

  registrarse(nombre: any, apellido: any, correo: any, telefono: any, cel: any) {
    console.log('Nombre: ' + this.nombre);
    console.log('Apellido: ' + this.apellido);
    console.log('Correo: ' + this.correo);
    console.log('Teléfono: ' + this.telefono);
    console.log('Celular: ' + this.cel);

    // tslint:disable-next-line: max-line-length
    if ( nombre === '' || nombre === undefined || apellido === '' || apellido === undefined || correo === '' || correo === undefined || telefono === '' || telefono === undefined || cel === '' || cel === undefined) {
      this.completo();
      this.label = 'danger';
    } else {

      this.label = 'medium';

      if (telefono.length < 10) {
        this.flag1 = false;
        this.hide1 = false;
      } else {
        this.flag1 = true;
        this.hide1 = true;
      }
      if (cel.length < 10) {
        this.flag2 = false;
        this.hide2 = false;
      } else {
        this.flag2 = true;
        this.hide2 = true;
      }

      if (this.flag1 === true && this.flag2 === true) {
        console.log('Flag1:' + this.flag1 + ' Flag2: ' + this.flag2);
        console.log('Hide1:' + this.hide1 + ' Hide2: ' + this.hide2);

        this.dataService.sendSMS(this.cel)
            .subscribe((data: any) => {

                console.log('success: ' + data.success);
                // this.userData = data;
                // tslint:disable-next-line: triple-equals
                if (data.success == 'TRUE') {
                    // this.router2.navigate( ['/dashboard'] ); tslint:disable-next-line:
                    // tslint:disable-next-line: max-line-length
                    this.router2.navigate(['/verificacion-user', this.nombre, this.apellido, this.user.correo, this.telefono, this.cel, this.user.password]);
                    // this.bien();
                    console.log('Funciono API Send SMS');

                } else {
                    this.mal(data.description);
                    console.log('Error: ' + data.description);
                }

            }, (error) => {
                console.log(error);
                // this.userData = 'Este es el error: ' + error.toString();
                this.mal(error);
            });
      } else {
        console.log('Flag1:' + this.flag1 + ' Flag2: ' + this.flag2);
        console.log('Hide1:' + this.hide1 + ' Hide2: ' + this.hide2);
      }

    }
  }

  async completo() {
    const toast = await this.toastController.create({
      message: 'LLenar todos los campos obligatorio',
      duration: 4000,
      color: 'warning',
      position: 'bottom'
    });
    toast.present();
  }

  async bien() {
    const toast = await this.toastController.create({
      message: 'Se registro correctamente el usuario',
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
