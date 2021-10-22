import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauPagePageRoutingModule } from './bateau-page-routing.module';

import { BateauPagePage } from './bateau-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauPagePageRoutingModule
  ],
  declarations: [BateauPagePage]
})
export class BateauPagePageModule {}
