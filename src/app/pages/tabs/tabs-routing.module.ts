import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        // loadChildren: '../dashboard-user/dashboard-user.module#DashboardUserPageModule'
        loadChildren: () => import('../dashboard-user/dashboard-user.module').then( m => m.DashboardUserPageModule)
      },
      {
        path: 'dashboard-user',
        // loadChildren: '../dashboard-user/dashboard-user.module#DashboardUserPageModule'
        loadChildren: () => import('../dashboard-user/dashboard-user.module').then( m => m.DashboardUserPageModule)
      },
      {
        path: 'inbox-user',
        // loadChildren: '../inbox-user/inbox-user.module#InboxUserPageModule'
        loadChildren: () => import('../inbox-user/inbox-user.module').then( m => m.InboxUserPageModule)
      },
      {
        path: 'profile-menu-user',
        // loadChildren: '../profile-menu/profile-menu.module#ProfileMenuPageModule'
        loadChildren: () => import('../profile-menu-user/profile-menu-user.module').then( m => m.ProfileMenuUserPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
