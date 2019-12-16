import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardUserPageRoutingModule } from './dashboard-user-routing.module';

import { DashboardUserPage } from './dashboard-user.page';

import { CvLawyerPage } from '../cv-lawyer/cv-lawyer.page';
import { CvLawyerPageModule } from '../cv-lawyer/cv-lawyer.module';

@NgModule({
  entryComponents: [
    CvLawyerPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardUserPageRoutingModule,
    CvLawyerPageModule
  ],
  declarations: [DashboardUserPage]
})
export class DashboardUserPageModule {}
