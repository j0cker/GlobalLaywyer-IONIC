import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ProfileSettings } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-profile-menu-user',
  templateUrl: './profile-menu-user.page.html',
  styleUrls: ['./profile-menu-user.page.scss'],
})
export class ProfileMenuUserPage implements OnInit {

  userSettings: Observable<ProfileSettings[]>;

  id_user: any;
  token: any;

  profile: any[] = [];
  i_nombre: any; i_apellido: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.userSettings = this.dataService.getUserSettings();

    this.id_user = localStorage.getItem('idUsuario');
    this.token = localStorage.getItem('Token');
    console.log('[Dashboard][ngOnInit] Token: ' + this.token);
    console.log('[Dashboard][ngOnInit] ID Usuario: ' + this.id_user);

    this.dataService.getUserProfile(this.token, this.id_user )
      .subscribe( (data: any) => {
        // this.userData = data;
        // tslint:disable-next-line: triple-equals
        if (data.success == 'TRUE') {
          console.log('[Dashboard][getUserProfile]');
          this.profile = data.data[0];
          this.i_nombre = data.data[0].nombre.substr(0, 1);
          this.i_apellido = data.data[0].apellido.substr(0, 1);
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
