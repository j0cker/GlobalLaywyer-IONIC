import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagadoPageRoutingModule } from './pagado-routing.module';

import { PagadoPage } from './pagado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagadoPageRoutingModule
  ],
  declarations: [PagadoPage]
})
export class PagadoPageModule {}
