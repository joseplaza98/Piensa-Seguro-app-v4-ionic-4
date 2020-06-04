import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selec-su-u5',
  templateUrl: './selec-su-u5.page.html',
  styleUrls: ['./selec-su-u5.page.scss'],
})
export class SelecSuU5Page implements OnInit {

  constructor(private router: Router) { }

  aLogrosU5() {
    this.router.navigate(['/logros-u5']);
  }

  /**Unidad 5 Sub Unidad 1 */
  t1_su1_u5() {
    this.router.navigate(['/t1-su1-u5']);
  }

  t2_su1_u5() {
    this.router.navigate(['/t2-su1-u5']);
  }

  t3_su1_u5() {
    this.router.navigate(['/t3-su1-u5']);
  }

  /**Cápsula (Actividad) U5-SU2 */
  a1_su1_u5() {
    this.router.navigate(['/a1-su1-u5']);
  }

  a2_su1_u5() {
    this.router.navigate(['/a2-su1-u5']);
  }

  /**Unidad 5 Sub Unidad 2 */
  t1_su2_u5() {
    this.router.navigate(['/t1-su2-u5']);
  }

  t2_su2_u5() {
    this.router.navigate(['/t2-su2-u5']);
  }

  /**Cápsula (Actividad) U5-SU2 */
  a1_su2_u5() {
    this.router.navigate(['/a1-su2-u5']);
  }

  aEVA_U5() {
    this.router.navigate(['/prueba-u5']);
  }

  aintU6() {
    this.router.navigate(['/int-u6']);
  }

  ngOnInit() {
  }

}
