import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cv-lawyer',
  templateUrl: './cv-lawyer.page.html',
  styleUrls: ['./cv-lawyer.page.scss'],
})
export class CvLawyerPage implements OnInit {

  @Input() id: any;
  @Input() nombre: any;
  @Input() apellido: any;
  @Input() correo: any;
  @Input() cedula: any;
  @Input() disponibilidad: any;
  @Input() celular: any;
  @Input() idiomas: any;
  @Input() diasLaborales: any;
  @Input() hEntrada: any;
  @Input() hSalida: any;
  @Input() address: any;
  @Input() longitud: any;
  @Input() latitud: any;
  @Input() escuela: any;
  @Input() carrera: any;
  @Input() mesInicio: any;
  @Input() anoInicio: any;
  @Input() mesTermino: any;
  @Input() anoTermino: any;

  i_nombre: any; i_apellido: any;

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
    this.i_nombre = this.nombre.substr(0, 1);
    this.i_apellido = this.apellido.substr(0, 1);
    // console.log(this.id);
  }

  contactar() {
    this.router.navigate( ['/contacto-lawyer', this.celular] );
    this.cerrarModal();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
