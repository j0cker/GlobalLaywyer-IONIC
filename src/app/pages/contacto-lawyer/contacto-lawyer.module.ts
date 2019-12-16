import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactoLawyerPageRoutingModule } from './contacto-lawyer-routing.module';

import { ContactoLawyerPage } from './contacto-lawyer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoLawyerPageRoutingModule
  ],
  declarations: [ContactoLawyerPage]
})
export class ContactoLawyerPageModule {}
