import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsLawPageRoutingModule } from './tabs-law-routing.module';

import { TabsLawPage } from './tabs-law.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsLawPageRoutingModule
  ],
  declarations: [TabsLawPage]
})
export class TabsLawPageModule {}
