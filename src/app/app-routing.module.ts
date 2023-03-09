import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule),
  },
  {
    path: 'servicos',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule),
  },
  {
    path: 'pedreiro',
    loadChildren: () => import('./pedreiro/pedreiro.module').then( m => m.PedreiroPageModule)
  },
  {
    path: 'encanador',
    loadChildren: () => import('./encanador/encanador.module').then( m => m.EncanadorPageModule)
  },
  {
    path: 'programador',
    loadChildren: () => import('./programador/programador.module').then( m => m.ProgramadorPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
