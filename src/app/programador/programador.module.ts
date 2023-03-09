import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramadorPageRoutingModule } from './programador-routing.module';

import { ProgramadorPage } from './programador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramadorPageRoutingModule
  ],
  declarations: [ProgramadorPage]
})
export class ProgramadorPageModule {}
