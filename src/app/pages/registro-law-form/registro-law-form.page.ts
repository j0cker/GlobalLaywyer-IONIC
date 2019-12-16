import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToastController, ModalController } from '@ionic/angular';
import {TerminosPage} from '../terminos/terminos.page';



@Component({
  selector: 'app-registro-law-form',
  templateUrl: './registro-law-form.page.html',
  styleUrls: ['./registro-law-form.page.scss'],
})
export class RegistroLawFormPage implements OnInit {

  user: any;
  label = 'medium'; label2 = 'medium';

  hide1 = true; hide2 = true; hide3 = true; hide4 = true;
  flag1: boolean; flag2: boolean; flag3: boolean; flag4: boolean;

  escuela: any; carrera: any; mesTermino: any; anoTermino: any;

  checkTerminos: boolean;

  // tslint:disable-next-line: max-line-length
  constructor(private router: ActivatedRoute, private router2: Router, public toastController: ToastController, private dataService: DataService, private modalCtrl: ModalController) {
    this.router.params.subscribe((params: any) => {
      console.log(params);
      this.user = params;
    });
  }

  ngOnInit() {
  }

  async terminos() {
    console.log('Entro a terminos y condiciones');

    const modal = await this.modalCtrl
        .create({component: TerminosPage});

    await modal.present();
  }

  terminos_change($event: any) {
    // console.log($event.detail.checked); tslint:disable-next-line: triple-equals
    if ($event.detail.checked == 1) {
        // console.log('Esta prendido');
        this.checkTerminos = true;
    } else {
        // console.log('Esta apagado');
        this.checkTerminos = false;
    }
  }

  reg_law(escuela: any, carrera: any, mesTermino: any, anoTermino: any) {

    // tslint:disable-next-line: max-line-length
    if ( escuela === '' || escuela === undefined || carrera === '' || carrera === undefined || mesTermino === '' || mesTermino === undefined || anoTermino === '' || anoTermino === undefined) {
      this.completo();
      this.label = 'danger';
    } else {

      this.label = 'medium';

      if (anoTermino.length < 4) {
        this.hide2 = false;
        this.flag2 = false;
      } else {
        this.hide2 = true;
        this.flag2 = true;
      }

      if (this.flag2 === true) {
        if (this.checkTerminos === true) {

          this.dataService.sendSMS(this.user.celular)
            .subscribe((data: any) => {

                console.log('success: ' + data.success);
                // this.userData = data;
                // tslint:disable-next-line: triple-equals
                if (data.success == 'TRUE') {
                    // this.router2.navigate( ['/dashboard'] ); tslint:disable-next-line:
                    // max-line-length
                    // tslint:disable-next-line: max-line-length
                    this.router2.navigate(['/verificacion', this.user.correo, this.user.password, this.user.cedula, this.user.nombre, this.user.apellido, this.user.disponibilidad, this.user.celular, this.user.idiomas, this.user.diasLaborales, this.user.hEntrada, this.user.hSalida, this.user.address, this.user.long, this.user.lat, this.escuela, this.carrera, this.mesTermino, this.anoTermino]);
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
          this.label2 = 'danger';
        }
      }
    }

  }

  async bien() {
    const toast = await this.toastController.create({
      message: 'Se registro correctamente el abogado',
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
