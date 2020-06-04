import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntU3Page } from './int-u3.page';

const routes: Routes = [
  {
    path: '',
    component: IntU3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntU3PageRoutingModule {}
