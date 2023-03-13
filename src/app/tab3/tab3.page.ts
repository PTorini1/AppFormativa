
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso!!!',
      subHeader: 'Seu perfil foi alterado',
      message: 'Suas informações de cadastro foram alteradas',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
