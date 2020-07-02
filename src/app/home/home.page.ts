import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/Auth/auth.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth, public alertController: AlertController) {
  }

  async onLogout() {
    console.log('Logout!');

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      message: '¿Esta seguro que desea cerrar la sesión?',
      buttons: [
        {
          text: 'SI',
          handler: () => {
            console.log('Confirmación Okay: Sesión Finalizada');
            this.afAuth.signOut();
            this.router.navigateByUrl('/login');
          }
        },
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmar Cancelar: Sesión Activa');
          }
        }
      ]
    });

    await alert.present();
  }

  aInt_U1() {
    this.router.navigate(['/int-u1'])
  }

  aInt_U2() {
    this.router.navigate(['/int-u2'])
  }

  aInt_U3() {
    this.router.navigate(['/int-u3'])
  }

  aInt_U4() {
    this.router.navigate(['/int-u4'])
  }

  aInt_U5() {
    this.router.navigate(['/int-u5'])
  }

  aInt_U6() {
    this.router.navigate(['/int-u6'])
  }

  aInt_U7() {
    this.router.navigate(['/int-u7'])
  }

}
