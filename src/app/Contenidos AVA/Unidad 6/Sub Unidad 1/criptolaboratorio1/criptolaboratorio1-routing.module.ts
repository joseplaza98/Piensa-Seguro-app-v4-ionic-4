import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Criptolaboratorio1Page } from './criptolaboratorio1.page';

const routes: Routes = [
  {
    path: '',
    component: Criptolaboratorio1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Criptolaboratorio1PageRoutingModule {}
