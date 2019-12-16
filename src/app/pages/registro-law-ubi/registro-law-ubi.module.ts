import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroLawUbiPageRoutingModule } from './registro-law-ubi-routing.module';

import { RegistroLawUbiPage } from './registro-law-ubi.page';

import { AutocompleteComponent } from '../../components/google-places/google-places.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroLawUbiPageRoutingModule
  ],
  declarations: [RegistroLawUbiPage, AutocompleteComponent]
})
export class RegistroLawUbiPageModule {}
