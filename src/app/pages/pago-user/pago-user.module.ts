import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoUserPageRoutingModule } from './pago-user-routing.module';

import { PagoUserPage } from './pago-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoUserPageRoutingModule
  ],
  declarations: [PagoUserPage]
})
export class PagoUserPageModule {}
