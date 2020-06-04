import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selec-su-u6',
  templateUrl: './selec-su-u6.page.html',
  styleUrls: ['./selec-su-u6.page.scss'],
})
export class SelecSuU6Page implements OnInit {

  constructor(private router: Router) { }

  aLogrosU6() {
    this.router.navigate(['/logros-u6']);
  }

  /**Unidad 6 Sub Unidad 1 */
  t1_su1_u6() {
    this.router.navigate(['/t1-su1-u6']);
  }

  t2_su1_u6() {
    this.router.navigate(['/t2-su1-u6']);
  }

  t3_su1_u6() {
    this.router.navigate(['/t3-su1-u6']);
  }

  t4_su1_u6() {
    this.router.navigate(['/t4-su1-u6']);
  }

  t5_su1_u6() {
    this.router.navigate(['/t5-su1-u6']);
  }

  /**Cápsula (Actividad) U6-SU1 */
  a1_su1_u6() {
    this.router.navigate(['/a1-su1-u6']);
  }

  a2_su1_u6() {
    this.router.navigate(['/a2-su1-u6']);
  }

  a3_su1_u6() {
    this.router.navigate(['/a3-su1-u6']);
  }

  aEVA_U6() {
    this.router.navigate(['/prueba-u6']);
  }

  aintU7() {
    this.router.navigate(['/int-u7']);
  }

  criptolaboratiorio1() {
    this.router.navigate(['/criptolaboratorio1']);
  }

  criptolaboratiorio2() {
    this.router.navigate(['/criptolaboratorio2']);
  }

  ngOnInit() {
  }

}
