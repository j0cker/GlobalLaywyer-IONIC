import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsLawPage } from './tabs-law.page';

const routes: Routes = [
  {
    path: '',
    component: TabsLawPage,
    children: [
      {
        path: '',
        // loadChildren: '../home-law/home-law.module#HomeLawPageModule'
        loadChildren: () => import('../home-law/home-law.module').then( m => m.HomeLawPageModule)
      },
      {
        path: 'home',
        // loadChildren: '../home-law/home-law.module#HomeLawPageModule'
        loadChildren: () => import('../home-law/home-law.module').then( m => m.HomeLawPageModule)
      },
      {
        path: 'profile-menu',
        // loadChildren: '../profile-menu/profile-menu.module#ProfileMenuPageModule'
        loadChildren: () => import('../profile-menu/profile-menu.module').then( m => m.ProfileMenuPageModule)
      },
      {
        path: 'inbox-law',
        // loadChildren: '../inbox-law/inbox-law.module#InboxLawPageModule'
        loadChildren: () => import('../inbox-law/inbox-law.module').then( m => m.InboxLawPageModule)
      },
      {
        path: 'calendar-law',
        // loadChildren: '../calendar-law/calendar-law.module#CalendarLawPageModule'
        loadChildren: () => import('../calendar-law/calendar-law.module').then( m => m.CalendarLawPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsLawPageRoutingModule {}
