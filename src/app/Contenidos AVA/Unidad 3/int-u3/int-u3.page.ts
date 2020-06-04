import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-int-u3',
  templateUrl: './int-u3.page.html',
  styleUrls: ['./int-u3.page.scss'],
})
export class IntU3Page implements OnInit {

  constructor(private router: Router) { }

  aSelec_SU_U3() {
    this.router.navigate(['/selec-su-u3']);
  }

  ngOnInit() {
  }

}
