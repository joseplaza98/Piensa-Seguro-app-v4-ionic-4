import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-int-u2',
  templateUrl: './int-u2.page.html',
  styleUrls: ['./int-u2.page.scss'],
})
export class IntU2Page implements OnInit {

  constructor(private router: Router) { }

  aSelec_SU_U2() {
    this.router.navigate(['/selec-su-u2']);
  }

  ngOnInit() {
  }

}
