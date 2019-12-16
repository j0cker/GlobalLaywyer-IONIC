import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardLawPageRoutingModule } from './dashboard-law-routing.module';

import { DashboardLawPage } from './dashboard-law.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardLawPageRoutingModule
  ],
  declarations: [DashboardLawPage]
})
export class DashboardLawPageModule {}
