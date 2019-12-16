import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InboxLawPageRoutingModule } from './inbox-law-routing.module';

import { InboxLawPage } from './inbox-law.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxLawPageRoutingModule
  ],
  declarations: [InboxLawPage]
})
export class InboxLawPageModule {}
