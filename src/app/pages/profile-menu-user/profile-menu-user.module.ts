import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMenuUserPageRoutingModule } from './profile-menu-user-routing.module';

import { ProfileMenuUserPage } from './profile-menu-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMenuUserPageRoutingModule
  ],
  declarations: [ProfileMenuUserPage]
})
export class ProfileMenuUserPageModule {}
