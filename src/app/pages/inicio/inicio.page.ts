import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public network: Network, public dialog: Dialogs) {
    this.network.onDisconnect().subscribe(() => {
      // console.log('network was disconnected :-(');
      this.dialog.alert('Error en la conexión a internet');
    });

    this.network.onConnect().subscribe(() => {
      // console.log('network connected!');
      this.dialog.alert('Conexión a internet establecida');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      /*
      setTimeout(() => {
          // console.log('we got a wifi connection, woohoo!');
          this.dialog.alert('Conexión a internet establecida');
      }, 3000);
      */
    });
   }

  ngOnInit() {
  }

}
