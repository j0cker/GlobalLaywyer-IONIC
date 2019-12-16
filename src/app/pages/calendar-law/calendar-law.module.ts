import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarLawPageRoutingModule } from './calendar-law-routing.module';

import { CalendarLawPage } from './calendar-law.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarLawPageRoutingModule
  ],
  declarations: [CalendarLawPage]
})
export class CalendarLawPageModule {}
