import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroLawFormPage } from './registro-law-form.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroLawFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroLawFormPageRoutingModule {}
