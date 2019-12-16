import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLawPage } from './home-law.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLawPageRoutingModule {}
