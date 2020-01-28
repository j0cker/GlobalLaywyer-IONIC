import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagado',
  templateUrl: './pagado.page.html',
  styleUrls: ['./pagado.page.scss'],
})
export class PagadoPage implements OnInit {

  profile: any[] = [];
  user: any;
  i_nombre: any; i_apellido: any;
  idiomas: any; diasLaborales: any;

  constructor(private dataService: DataService, private router: ActivatedRoute) {
    this.router.params.subscribe((params: any) => {
      console.log(params);
      this.user = params;
    });
  }

  ngOnInit() {
    this.dataService.getLaw(this.user.cedula)
      .subscribe( (data: any) => {
        // this.userData = data;
        // tslint:disable-next-line: triple-equals
        if (data.success == 'TRUE') {
          console.log('[Dashboard][getLaw]');
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
