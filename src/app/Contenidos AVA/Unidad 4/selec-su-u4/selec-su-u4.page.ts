import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selec-su-u4',
  templateUrl: './selec-su-u4.page.html',
  styleUrls: ['./selec-su-u4.page.scss'],
})
export class SelecSuU4Page implements OnInit {

  constructor(private router: Router) { }

  aLogrosU4() {
    this.router.navigate(['/logros-u4']);
  }

  /**Unidad 4 Sub Unidad 1*/
  t1_su1_u4() {
    this.router.navigate(['/t1-su1-u4']);
  }

  /**Cápsula (Actividad) U4-SU1 */
  a1_su1_u4() {
    this.router.navigate(['/a1-su1-u4']);
  }

  /**Unidad 4 Sub Unidad 2*/
  t1_su2_u4() {
    this.router.navigate(['/t1-su2-u4']);
  }

  t2_su2_u4() {
    this.router.navigate(['/t2-su2-u4']);
  }

  /**Cápsula (Actividad) U4-SU2 */
  a1_su2_u4() {
    this.router.navigate(['/a1-su2-u4']);
  }

  a2_su2_u4() {
    this.router.navigate(['/a2-su2-u4']);
  }

  aEVA_U4() {
    this.router.navigate(['/prueba-u4']);
  }

  aintU5() {
    this.router.navigate(['/int-u5']);
  }

  ngOnInit() {
  }

}
