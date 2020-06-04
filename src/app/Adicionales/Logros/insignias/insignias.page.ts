import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.page.html',
  styleUrls: ['./insignias.page.scss'],
})
export class InsigniasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aLogros_u1() {
    this.router.navigate(['/logros-u1'])
  }

  aLogros_u2() {
    this.router.navigate(['/logros-u2'])
  }

  aLogros_u3() {
    this.router.navigate(['/logros-u3'])
  }

  aLogros_u4() {
    this.router.navigate(['/logros-u4'])
  }

  aLogros_u5() {
    this.router.navigate(['/logros-u5'])
  }

  aLogros_u6() {
    this.router.navigate(['/logros-u6'])
  }

  aLogros_u7() {
    this.router.navigate(['/logros-u7'])
  }

}
