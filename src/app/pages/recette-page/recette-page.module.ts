import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettePagePageRoutingModule } from './recette-page-routing.module';

import { RecettePagePage } from './recette-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettePagePageRoutingModule
  ],
  declarations: [RecettePagePage]
})
export class RecettePagePageModule {}
