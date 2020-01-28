import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage implements OnInit {

  loading: any;

  code: any;
  user: any;

  escuela: any; carrera: any; mesInicio: any; anoInicio: any; mesTermino: any; anoTermino: any;

  // tslint:disable-next-line: max-line-length
  constructor(private router: ActivatedRoute, private router2: Router, private dataService: DataService, public toastController: ToastController, private loadingCtrl: LoadingController) {
    this.router.params.subscribe((params: any) => {
      console.log(params);
      this.user = params;
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

  verify(code: any) {

    // tslint:disable-next-line: max-line-length
    if (code == '' || code == undefined) {
        this.completo();
    } else {
        console.log(this.code);
        console.log(this.user.celular);

        this.presentLoading();

        // tslint:disable-next-line: max-line-length
        this.dataService.verifyCode(this.code, this.user.celular)
            .subscribe((data: any) => {

                console.log('success: ' + data);
                // this.userData = data; tslint:disable-next-line: triple-equals
                if (data.success === 'TRUE') {
                    console.log('[Verify][Verify Code]');

                    // tslint:disable-next-line: max-line-length
                    this.dataService.regLaw(this.user.correo, this.user.password, this.user.cedula, this.user.nombre, this.user.apellido, this.user.disponibilidad, this.user.celular, this.user.idiomas, this.user.diasLaborales, this.user.hEntrada, this.user.hSalida, this.user.address, this.user.long, this.user.lat, this.user.escuela, this.user.carrera, this.user.mesTermino, this.user.anoTermino)
                    .subscribe( (data2: any) => {

                      console.log('[Verify][UserPost] Data: ' + data2);
                      console.log('[Verify][UserPost] success: ' + data2.success);
                      console.log('[Verify][UserPost] Token: ' + data2.token);
                      console.log('[Verify][UserPost] Usuario: ' + data2.data[0].id);

                      localStorage.setItem('idUsuario', data2.data[0].id);
                      localStorage.setItem('Token', data2.token);
                      // this.userData = data;
                      if (data2.success === 'TRUE') {
                        console.log('Prueba de ruta dashboard');
                        this.router2.navigate( ['/tabs-law/home'] );
                        this.dissmissLoading();
                        this.bien();
                      } else {
                        this.mal(data2.description);
                        this.dissmissLoading();
                      }

                    }, ( error ) => {
                        console.log('Este es el error: ');
                        console.log(error);

                        // this.userData = 'Este es el error: ' + error.toString();
                        this.mal('Revise su conexión a internet o contacte al administrador');
                        this.dissmissLoading();
                    });


                } else {
                    this.mal(data.description);
                    this.dissmissLoading();
                    console.log('Error: ' + data.description);
                }

            }, (error) => {
                console.log('Este es el error: ');
                console.log(error);

                // this.userData = 'Este es el error: ' + error.toString();
                this.mal('Revise su conexión a internet o contacte al administrador');
                this.dissmissLoading();
            });


    }

  }

  resendSMS() {
    this.dataService.sendSMS(this.user.celular)
      .subscribe((data: any) => {

          console.log('success: ' + data.success);
          // this.userData = data;
          // tslint:disable-next-line: triple-equals
          if (data.success == 'TRUE') {
              this.resend();
              console.log('Se reenvio SMS');

          } else {
              this.mal(data.description);
              console.log('Error: ' + data.description);
          }

      }, (error) => {
          console.log(error);
          // this.userData = 'Este es el error: ' + error.toString();
          this.mal(error);
      });
  }

  async completo() {
      const toast = await this
          .toastController
          .create(
              {message: 'LLenar todos los campos', duration: 4000, color: 'dark', position: 'bottom'}
          );
      toast.present();
  }

  async bien() {
      const toast = await this
          .toastController
          .create(
              {message: 'Usuario registrado con éxito', duration: 4000, color: 'dark', position: 'bottom'}
          );
      toast.present();
  }

  async mal(msj: any) {
      const toast = await this
          .toastController
          .create({message: msj, duration: 4000, color: 'danger', position: 'bottom'});
      toast.present();
  }

  async resend() {
        const toast = await this
            .toastController
            .create(
                {message: 'Se reenvió código de verificación', duration: 4000, color: 'dark', position: 'bottom'}
            );
        toast.present();
    }

}
