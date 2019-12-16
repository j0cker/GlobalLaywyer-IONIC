import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard-law',
  templateUrl: './dashboard-law.page.html',
  styleUrls: ['./dashboard-law.page.scss'],
})
export class DashboardLawPage implements OnInit {

  usuario: string;
  id_user: any;
  token: any;

  profile: any[] = [];
  i_nombre: any; i_apellido: any;
  idiomas: any; diasLaborales: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.id_user = localStorage.getItem('idUsuario');
    this.token = localStorage.getItem('Token');
    console.log('[Dashboard][ngOnInit] Token: ' + this.token);
    console.log('[Dashboard][ngOnInit] ID Usuario: ' + this.id_user);

    this.dataService.getProfile(this.token, this.id_user )
      .subscribe( (data: any) => {
        // this.userData = data;
        // tslint:disable-next-line: triple-equals
        if (data.success == 'TRUE') {
          console.log('[Dashboard][getProfile]');
          this.profile = data.data[0];
          this.i_nombre = data.data[0].nombre.substr(0, 1);
          this.i_apellido = data.data[0].apellido.substr(0, 1);
          this.idiomas = JSON.parse(data.data[0].idiomas);
          this.diasLaborales = JSON.parse(data.data[0].diasLaborales);
        } else {
          // this.mal(data2.description);
          console.log('Error: ' + data.description);
        }

      }, ( error ) => {
        console.log(error);
        // this.userData = 'Este es el error: ' + error.toString();
        // this.mal(error);
      });
  }

}
