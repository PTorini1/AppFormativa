import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncanadorPageRoutingModule } from './encanador-routing.module';

import { EncanadorPage } from './encanador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncanadorPageRoutingModule
  ],
  declarations: [EncanadorPage]
})
export class EncanadorPageModule {}
