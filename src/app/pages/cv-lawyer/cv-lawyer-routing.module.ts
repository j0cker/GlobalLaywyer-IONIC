import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvLawyerPage } from './cv-lawyer.page';

const routes: Routes = [
  {
    path: '',
    component: CvLawyerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvLawyerPageRoutingModule {}
