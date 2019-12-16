import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CvLawyerPage } from '../cv-lawyer/cv-lawyer.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.page.html',
  styleUrls: ['./dashboard-user.page.scss'],
})
export class DashboardUserPage implements OnInit {

  abogados: any[] = [];

  constructor(private dataService: DataService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.dataService.abogadosCards()
    .subscribe( (data: any[]) => {
      this.abogados = data;

    }, ( error ) => {
      console.log(error);
    });

  }

  async cv(id: any) {
    // console.log(id);
    const abogado = this.abogados[id - 1];

    const modal = await this.modalCtrl.create({
      component: CvLawyerPage,
      componentProps: {
        id: abogado.id_abogado,
        nombre : abogado.nombre,
        apellido: abogado.apellido,
        correo : abogado.correo,
        cedula : abogado.cedula,
        disponibilidad: abogado.disponibilidad,
        celular: abogado.celular,
        idiomas: JSON.parse(abogado.idiomas),
        diasLaborales: JSON.parse(abogado.diasLaborales),
        hEntrada: abogado.hEntrada,
        hSalida: abogado.hSalida,
        address: abogado.address,
        longitud: abogado.longitud,
        latitud: abogado.latitud,
        escuela: abogado.escuela,
        carrera: abogado.carrera,
        mesInicio: abogado.mesInicio,
        anoInicio: abogado.anoInicio,
        mesTermino: abogado.mesTermino,
        anoTermino: abogado.anoTermino
      }
    });

    // console.log(abogado.id_abogado);
    await modal.present();
  }

}
