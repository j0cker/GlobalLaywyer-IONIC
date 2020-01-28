import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-registro-law',
  templateUrl: './registro-law.page.html',
  styleUrls: ['./registro-law.page.scss'],
})
export class RegistroLawPage implements OnInit {

  loading: any;
  user: any;
  label = 'medium';
  // tslint:disable-next-line: max-line-length
  cedula: any; nombre: any; apellido: any; correo: any; disponibilidad: any; celular: any; idioma: any; diasLaborales: any; hEntrada: any; hSalida: any;
  hide1 = true; hide2 = true; hide3 = true; hide4 = true;
  flag1: boolean; flag2: boolean; flag3: boolean; flag4: boolean;

  // tslint:disable-next-line: max-line-length
  constructor(private router: ActivatedRoute, private router2: Router, public toastController: ToastController, private dataService: DataService, private loadingCtrl: LoadingController) {
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

  // tslint:disable-next-line: max-line-length
  reg_law2(cedula: any, nombre: any, apellido: any, correo: any, disponibilidad: any, celular: any, idioma: any, diasLaborales: any, hEntrada: any, hSalida: any) {
    // tslint:disable-next-line: max-line-length
    if (cedula == '' || cedula == undefined || nombre == '' || nombre == undefined || apellido == '' || apellido == undefined || correo == '' || correo == undefined || disponibilidad == '' || disponibilidad == undefined || celular == '' || celular == undefined || idioma == '' || idioma == undefined || diasLaborales == '' || diasLaborales == undefined || hEntrada == '' || hEntrada == undefined || hSalida == '' || hSalida == undefined) {
      this.completo();
      this.label = 'danger';
    } else {
      // this.label = 'light';

      if (cedula.length < 7) {
        this.hide1 = false;
        // console.log(this.hide);
        this.flag1 = false;
      } else {
        this.hide1 = true;
        this.flag1 = true;
      }
      if (celular.length < 10) {
        this.hide2 = false;
        // console.log(this.hide);
        this.flag2 = false;
      } else {
        this.hide2 = true;
        this.flag2 = true;
      }

      if (this.flag1 === true && this.flag2 === true) {
        // console.log('Cédula: ' + cedula);
        this.presentLoading();

        this.dataService.verifyCedula(cedula)
        .subscribe( (data: any) => {

          if (data.success === 'TRUE') {
            // Si la Cédula profesional existe
            const idiomas: any = JSON.stringify(idioma);
            const diasLaborales2: any = JSON.stringify(diasLaborales);

            // tslint:disable-next-line: max-line-length
            this.router2.navigate( ['/registro-law-ubi', this.user.correo, this.user.password, cedula, nombre, apellido, disponibilidad, celular, idiomas, diasLaborales2, hEntrada, hSalida] );
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

    }

  }

  // tslint:disable-next-line: max-line-length
  reg_law(cedula: any, nombre: any, apellido: any, correo: any, disponibilidad: any, celular: any, idioma: any, diasLaborales: any, hEntrada: any, hSalida: any) {
    // tslint:disable-next-line: max-line-length
    if (cedula == '' || cedula == undefined || nombre == '' || nombre == undefined || apellido == '' || apellido == undefined || correo == '' || correo == undefined || disponibilidad == '' || disponibilidad == undefined || celular == '' || celular == undefined || idioma == '' || idioma == undefined || diasLaborales == '' || diasLaborales == undefined || hEntrada == '' || hEntrada == undefined || hSalida == '' || hSalida == undefined) {
      this.completo();
      this.label = 'danger';
    } else {
      // this.label = 'light';

      if (cedula.length < 7) {
        this.hide1 = false;
        // console.log(this.hide);
        this.flag1 = false;
      } else {
        this.hide1 = true;
        this.flag1 = true;
      }
      if (celular.length < 10) {
        this.hide2 = false;
        // console.log(this.hide);
        this.flag2 = false;
      } else {
        this.hide2 = true;
        this.flag2 = true;
      }

      if (this.flag1 === true && this.flag2 === true) {
        // console.log('Cédula: ' + cedula);
        this.presentLoading();

        const idiomas: any = JSON.stringify(idioma);
        const diasLaborales2: any = JSON.stringify(diasLaborales);

        // tslint:disable-next-line: max-line-length
        this.router2.navigate( ['/registro-law-ubi', this.user.correo, this.user.password, cedula, nombre, apellido, disponibilidad, celular, idiomas, diasLaborales2, hEntrada, hSalida] );
        this.dissmissLoading();

      }

    }

  }

  async bien() {
    const toast = await this.toastController.create({
      header: 'Mensaje',
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

  async completo() {
    const toast = await this.toastController.create({
      message: 'LLenar todos los campos obligatorio',
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

}
