import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CvLawyerPage } from '../cv-lawyer/cv-lawyer.page';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.page.html',
  styleUrls: ['./dashboard-user.page.scss'],
})
export class DashboardUserPage implements OnInit {

  abogados: any[] = [];
  lat: number;
  lon: number;
  total: string;
  i: any;

  constructor(private dataService: DataService, private modalCtrl: ModalController, private geolocation: Geolocation) { }

  ngOnInit() {
    this.currentPosition();

    this.dataService.abogadosCards()
    .subscribe( (data: any[]) => {
      this.abogados = data;
      console.log(data);
    }, ( error ) => {
      console.log(error);
    });

  }

  currentPosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      console.log(this.lat);
      console.log(this.lon);
    }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  calculateDistance(lon1: any, lon2: any, lat1: any, lat2: any) {
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((lon1 - lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    alert(Math.trunc(dis));
    return Math.trunc(dis);
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
