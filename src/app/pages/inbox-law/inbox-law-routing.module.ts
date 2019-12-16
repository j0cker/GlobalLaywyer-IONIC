import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxLawPage } from './inbox-law.page';

const routes: Routes = [
  {
    path: '',
    component: InboxLawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxLawPageRoutingModule {}
