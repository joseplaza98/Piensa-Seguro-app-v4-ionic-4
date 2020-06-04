import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selec-su-u2',
  templateUrl: './selec-su-u2.page.html',
  styleUrls: ['./selec-su-u2.page.scss'],
})
export class SelecSuU2Page implements OnInit {

  constructor(private router: Router) { }

  aLogrosU2() {
    this.router.navigate(['/logros-u2']);
  }

  /** Unidad 2 Sub Unidad 1*/
  t1_su1_u2() {
    this.router.navigate(['/t1-su1-u2']);
  }

  t2_su1_u2() {
    this.router.navigate(['/t2-su1-u2']);
  }

  t3_su1_u2() {
    this.router.navigate(['/t3-su1-u2']);
  }

  t4_su1_u2() {
    this.router.navigate(['/t4-su1-u2']);
  }

  t5_su1_u2() {
    this.router.navigate(['/t5-su1-u2']);
  }

  t6_su1_u2() {
    this.router.navigate(['/t6-su1-u2']);
  }

  /**Cápsula (Actividad) U2-SU1 */
  a1_su1_U2() {
    this.router.navigate(['/a1-su1-u2']);
  }

  a2_su1_U2() {
    this.router.navigate(['/a2-su1-u2']);
  }

  a3_su1_U2() {
    this.router.navigate(['/a3-su1-u2']);
  }

  a4_su1_U2() {
    this.router.navigate(['/a4-su1-u2']);
  }

  /** Unidad 2 Sub Unidad 2*/
  t1_su2_u2() {
    this.router.navigate(['/t1-su2-u2']);
  }

  t2_su2_u2() {
    this.router.navigate(['/t2-su2-u2']);
  }

  /**Cápsula (Actividad) U2-SU2 */
  a1_su2_u2() {
    this.router.navigate(['/a1-su2-u2']);
  }

  /** Unidad 2 Sub Unidad 3*/
  t1_su3_u2() {
    this.router.navigate(['/t1-su3-u2']);
  }

  t2_su3_u2() {
    this.router.navigate(['/t2-su3-u2']);
  }

  t3_su3_u2() {
    this.router.navigate(['/t3-su3-u2']);
  }

  t4_su3_u2() {
    this.router.navigate(['/t4-su3-u2']);
  }

  t5_su3_u2() {
    this.router.navigate(['/t5-su3-u2']);
  }

  t6_su3_u2() {
    this.router.navigate(['/t6-su3-u2']);
  }

  /**Cápsula (Actividad) U2-SU3 */
  a1_su3_u2() {
    this.router.navigate(['/a1-su3-u2']);
  }

  a2_su3_u2() {
    this.router.navigate(['/a2-su3-u2']);
  }

  /** Unidad 2 Sub Unidad 4*/
  t1_su4_u2() {
    this.router.navigate(['/t1-su4-u2']);
  }

  t2_su4_u2() {
    this.router.navigate(['/t2-su4-u2']);
  }

  /**Cápsula (Actividad) U2-SU4 */
  a1_su4_u2() {
    this.router.navigate(['/a1-su4-u2']);
  }

  a2_su4_u2() {
    this.router.navigate(['/a2-su4-u2']);
  }

  aEVA_U2() {
    this.router.navigate(['/prueba-u2']);
  }

  aintU3() {
    this.router.navigate(['/int-u3']);
  }


  ngOnInit() {
  }

}
