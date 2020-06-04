import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selec-su-u7',
  templateUrl: './selec-su-u7.page.html',
  styleUrls: ['./selec-su-u7.page.scss'],
})
export class SelecSuU7Page implements OnInit {

  constructor(private router: Router) { }

  aLogrosU7() {
    this.router.navigate(['/logros-u7']);
  }

  /**Unidad 7 Sub Unidad 1 */
  t1_su1_u7() {
    this.router.navigate(['/t1-su1-u7']);
  }

  t2_su1_u7() {
    this.router.navigate(['/t2-su1-u7']);
  }

  /**Cápsula (Actividad) U6-SU1 */
  a1_su1_u7() {
    this.router.navigate(['/a1-su1-u7']);
  }

  a2_su1_u7() {
    this.router.navigate(['/a2-su1-u7']);
  }

  aEVA_U7() {
    this.router.navigate(['/prueba-u7']);
  }

  ngOnInit() {
  }

}
