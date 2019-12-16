import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroLawFormPageRoutingModule } from './registro-law-form-routing.module';

import { RegistroLawFormPage } from './registro-law-form.page';

import { TerminosPage } from '../terminos/terminos.page';
import { TerminosPageModule } from '../terminos/terminos.module';

@NgModule({
  entryComponents: [
    TerminosPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroLawFormPageRoutingModule,
    TerminosPageModule
  ],
  declarations: [RegistroLawFormPage]
})
export class RegistroLawFormPageModule {}
