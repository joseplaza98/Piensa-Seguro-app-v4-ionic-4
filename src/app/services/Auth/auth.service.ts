import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth,public alertController: AlertController) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }

  /**Login*/
  async onLogin(user: User) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error on login', error);
      const alert = await this.alertController.create({
        header: 'Atención',
        subHeader: 'Error',
        message: 'Usuario o contraseña incorrectos.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }


  /**Register */
  async onRegister(user: User) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error on register user', error);
      const alert = await this.alertController.create({
        header: 'Atención',
        subHeader: 'Error',
        message: 'Usuario no registrado. Por favor, ¡intentelo de nuevo!',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }
}
