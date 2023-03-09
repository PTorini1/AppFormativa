import { PedreiroPage } from './../pedreiro/pedreiro.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { EncanadorPage } from '../encanador/encanador.page';
import { ProgramadorPage } from '../programador/programador.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'pedreiro',
    component: PedreiroPage
  },
  {
    path: 'encanador',
    component: EncanadorPage
  },
  {
    path: 'programador',
    component: ProgramadorPage
  },
  {
    path: 'servicos',
    component: Tab2Page
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
