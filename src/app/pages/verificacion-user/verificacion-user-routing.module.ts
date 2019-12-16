import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificacionUserPage } from './verificacion-user.page';

const routes: Routes = [
  {
    path: '',
    component: VerificacionUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificacionUserPageRoutingModule {}
