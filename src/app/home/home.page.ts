import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/Auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth) {
  }

  onLogout() {
    console.log('Logout!');
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
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


  aAdmin() {
    this.router.navigate(['/admin'])
  }

}
