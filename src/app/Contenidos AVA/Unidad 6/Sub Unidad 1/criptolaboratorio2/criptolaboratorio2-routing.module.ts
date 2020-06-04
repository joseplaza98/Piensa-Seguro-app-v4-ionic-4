import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Criptolaboratorio2Page } from './criptolaboratorio2.page';

const routes: Routes = [
  {
    path: '',
    component: Criptolaboratorio2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Criptolaboratorio2PageRoutingModule {}
