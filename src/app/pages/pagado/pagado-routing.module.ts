import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagadoPage } from './pagado.page';

const routes: Routes = [
  {
    path: '',
    component: PagadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagadoPageRoutingModule {}
