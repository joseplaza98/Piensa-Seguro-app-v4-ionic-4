import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selec-su-u1',
  templateUrl: './selec-su-u1.page.html',
  styleUrls: ['./selec-su-u1.page.scss'],
})
export class SelecSuU1Page implements OnInit {

  constructor(private router: Router) { }

  aLogrosU1() {
    this.router.navigate(['/logros-u1'])
  }


  /**Temas Sub Unidad 1 */

  t1_su1_u1() {
    this.router.navigate(['/t1-su1-u1'])
  }

  t2_su1_u1() {
    this.router.navigate(['/t2-su1-u1'])
  }

  t3_su1_u1() {
    this.router.navigate(['/t3-su1-u1'])
  }

  t4_su1_u1() {
    this.router.navigate(['/t4-su1-u1'])
  }

  /**Cápsula (Actividad) U1-SU1 */

  a1_su1_u1() {
    this.router.navigate(['/a1-su1-u1'])
  }

  a2_su1_u1() {
    this.router.navigate(['/a2-su1-u1'])
  }

  a3_su1_u1() {
    this.router.navigate(['/a3-su1-u1'])
  }

  /** Temas Sub Unidad 2 */

  t1_su2_u1() {
    this.router.navigate(['/t1-su2-u1'])
  }

  t2_su2_u1() {
    this.router.navigate(['/t2-su2-u1'])
  }

  t3_su2_u1() {
    this.router.navigate(['/t3-su2-u1'])
  }

  /**Cápsula (Actividad) U1-SU2 */
  a1_su2_u1() {
    this.router.navigate(['/a1-su2-u1'])
  }

  aEVA_U1() {
    this.router.navigate(['/prueba-u1'])
  }

  aintU2() {
    this.router.navigate(['/int-u2'])
  }

  ngOnInit() {
  }

}
