import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InboxUserPageRoutingModule } from './inbox-user-routing.module';

import { InboxUserPage } from './inbox-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxUserPageRoutingModule
  ],
  declarations: [InboxUserPage]
})
export class InboxUserPageModule {}
