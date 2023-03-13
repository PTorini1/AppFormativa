import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

// export class ExampleComponent {
//   constructor(private alertController: AlertController) {}

 
// }

export class CadastroPage implements OnInit {

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso!!!',
      subHeader: 'Conta cadastrada',
      message: 'Sua conta foi cadastrada',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
