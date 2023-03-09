import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramadorPage } from './programador.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramadorPageRoutingModule {}
