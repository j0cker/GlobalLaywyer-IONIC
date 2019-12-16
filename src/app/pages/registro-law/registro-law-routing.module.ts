import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroLawPage } from './registro-law.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroLawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroLawPageRoutingModule {}
