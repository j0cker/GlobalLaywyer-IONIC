import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoLawyerPage } from './contacto-lawyer.page';

const routes: Routes = [
  {
    path: '',
    component: ContactoLawyerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoLawyerPageRoutingModule {}
