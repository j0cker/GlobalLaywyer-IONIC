import { Component, OnInit } from '@angular/core';
import { RecoverPasswordPage } from '../recover-password/recover-password.page';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  celular: any;

  label = 'medium';

  flag1: boolean; hide1 = true;

  constructor(private modalCtrl: ModalController, public toastController: ToastController) { }

  ngOnInit() {
  }

  async recoverPassword(celular: any) {
    // console.log('Entro a terminos y condiciones');

    if (celular === '' || celular === undefined) {
      this.completo();
      this.label = 'danger';
    } else {
      this.label = 'medium';

      if (celular.length < 10) {
        this.flag1 = false;
        this.hide1 = false;
      } else {
        this.flag1 = true;
        this.hide1 = true;

        const modal = await this.modalCtrl.create({
          component: RecoverPasswordPage,
          componentProps: {
            celular: this.celular
          }
        });

        await modal.present();
      }
    }

  }

  async completo() {
    const toast = await this.toastController.create({
      message: 'LLenar todos los campos obligatorio',
      duration: 4000,
      color: 'warning',
      position: 'bottom'
    });
    toast.present();
  }

}
