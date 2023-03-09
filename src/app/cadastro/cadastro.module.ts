import { TabsPageRoutingModule } from './../tabs/tabs-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    TabsPageRoutingModule,
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
export class TabsPageModule {}

