import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxUserPage } from './inbox-user.page';

const routes: Routes = [
  {
    path: '',
    component: InboxUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxUserPageRoutingModule {}
