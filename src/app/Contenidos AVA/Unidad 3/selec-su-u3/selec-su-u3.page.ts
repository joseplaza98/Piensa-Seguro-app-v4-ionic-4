import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selec-su-u3',
  templateUrl: './selec-su-u3.page.html',
  styleUrls: ['./selec-su-u3.page.scss'],
})
export class SelecSuU3Page implements OnInit {

  constructor(private router: Router) { }

  aLogrosU3() {
    this.router.navigate(['/logros-u3']);
  }

  /**Unidad 3 Sub Unidad 1*/
  t1_su1_u3() {
    this.router.navigate(['/t1-su1-u3']);
  }

  t2_su1_u3() {
    this.router.navigate(['/t2-su1-u3']);
  }

  t3_su1_u3() {
    this.router.navigate(['/t3-su1-u3']);
  }

  t4_su1_u3() {
    this.router.navigate(['/t4-su1-u3']);
  }

  t5_su1_u3() {
    this.router.navigate(['/t5-su1-u3']);
  }

  t6_su1_u3() {
    this.router.navigate(['/t6-su1-u3']);
  }

  /**Cápsula (Actividad) U3-SU1 */
  a1_su1_u3() {
    this.router.navigate(['/a1-su1-u3']);
  }

  /**Unidad 3 Sub Unidad 2*/
  t1_su2_u3() {
    this.router.navigate(['/t1-su2-u3']);
  }

  t2_su2_u3() {
    this.router.navigate(['/t2-su2-u3']);
  }

  t3_su2_u3() {
    this.router.navigate(['/t3-su2-u3']);
  }

  /**Cápsula (Actividad) U3-SU2 */
  a1_su2_u3() {
    this.router.navigate(['/a1-su2-u3']);
  }

  a2_su2_u3() {
    this.router.navigate(['/a2-su2-u3']);
  }

  a3_su2_u3() {
    this.router.navigate(['/a3-su2-u3']);
  }

  /**Unidad 3 Sub Unidad 3*/
  t1_su3_u3() {
    this.router.navigate(['/t1-su3-u3']);
  }

  t2_su3_u3() {
    this.router.navigate(['/t2-su3-u3']);
  }

  /**Cápsula (Actividad) U3-SU3 */
  a1_su3_u3() {
    this.router.navigate(['/a1-su3-u3']);
  }

  aEVA_U3(){
    this.router.navigate(['/prueba-u3']);
  }

  aintU4() {
    this.router.navigate(['/int-u4']);
  }

  ngOnInit() {
  }

}
