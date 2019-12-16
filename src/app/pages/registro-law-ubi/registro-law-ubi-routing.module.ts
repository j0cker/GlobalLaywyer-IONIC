import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroLawUbiPage } from './registro-law-ubi.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroLawUbiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroLawUbiPageRoutingModule {}
