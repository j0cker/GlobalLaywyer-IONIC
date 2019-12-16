import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeLawPageRoutingModule } from './home-law-routing.module';

import { HomeLawPage } from './home-law.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLawPageRoutingModule
  ],
  declarations: [HomeLawPage]
})
export class HomeLawPageModule {}
