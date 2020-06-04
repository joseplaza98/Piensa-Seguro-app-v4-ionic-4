import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-int-u1',
  templateUrl: './int-u1.page.html',
  styleUrls: ['./int-u1.page.scss'],
})
export class IntU1Page implements OnInit {

  constructor(private router: Router) { }

  aSelec_SU_U1() {
    this.router.navigate(['/selec-su-u1'])
  }

  ngOnInit() {
  }

}
