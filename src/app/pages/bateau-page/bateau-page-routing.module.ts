import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauPagePage } from './bateau-page.page';

const routes: Routes = [
  {
    path: '',
    component: BateauPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauPagePageRoutingModule {}
