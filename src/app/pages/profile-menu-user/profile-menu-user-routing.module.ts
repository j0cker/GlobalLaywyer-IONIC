import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileMenuUserPage } from './profile-menu-user.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileMenuUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMenuUserPageRoutingModule {}
