import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedreiroPage } from './pedreiro.page';

const routes: Routes = [
  {
    path: '',
    component: PedreiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedreiroPageRoutingModule {}
