import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificacionUserPageRoutingModule } from './verificacion-user-routing.module';

import { VerificacionUserPage } from './verificacion-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificacionUserPageRoutingModule
  ],
  declarations: [VerificacionUserPage]
})
export class VerificacionUserPageModule {}
