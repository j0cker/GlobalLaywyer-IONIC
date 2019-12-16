import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroLawPageRoutingModule } from './registro-law-routing.module';

import { RegistroLawPage } from './registro-law.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroLawPageRoutingModule
  ],
  declarations: [RegistroLawPage]
})
export class RegistroLawPageModule {}
