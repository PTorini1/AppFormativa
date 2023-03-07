import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedreiroPageRoutingModule } from './pedreiro-routing.module';

import { PedreiroPage } from './pedreiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedreiroPageRoutingModule
  ],
  declarations: [PedreiroPage]
})
export class PedreiroPageModule {}
