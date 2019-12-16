import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLawPage } from './dashboard-law.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardLawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardLawPageRoutingModule {}
