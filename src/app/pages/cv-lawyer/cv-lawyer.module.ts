import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvLawyerPageRoutingModule } from './cv-lawyer-routing.module';

import { CvLawyerPage } from './cv-lawyer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvLawyerPageRoutingModule
  ],
  declarations: [CvLawyerPage]
})
export class CvLawyerPageModule {}
