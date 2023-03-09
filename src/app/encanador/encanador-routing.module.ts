import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncanadorPage } from './encanador.page';

const routes: Routes = [
  {
    path: '',
    component: EncanadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncanadorPageRoutingModule {}
