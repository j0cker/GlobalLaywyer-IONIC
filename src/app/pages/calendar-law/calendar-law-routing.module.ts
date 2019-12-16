import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarLawPage } from './calendar-law.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarLawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarLawPageRoutingModule {}
