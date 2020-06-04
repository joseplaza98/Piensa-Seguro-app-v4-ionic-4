import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-prueba-u7',
  templateUrl: './prueba-u7.page.html',
  styleUrls: ['./prueba-u7.page.scss'],
})
export class PruebaU7Page implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'NOTA',
      message: 'Recuerde que solo tiene una unica oportunida de realizar la prueba, después de iniciada debe finalizarla.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.presentAlert();
  }

}
