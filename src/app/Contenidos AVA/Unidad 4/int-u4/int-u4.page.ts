import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-int-u4',
  templateUrl: './int-u4.page.html',
  styleUrls: ['./int-u4.page.scss'],
})
export class IntU4Page implements OnInit {

  constructor(private router: Router) { }

  aSelec_SU_U4(){
    this.router.navigate(['/selec-su-u4']);
  }

  ngOnInit() {
  }

}
