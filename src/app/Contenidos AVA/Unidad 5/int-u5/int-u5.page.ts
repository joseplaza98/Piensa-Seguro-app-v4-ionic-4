import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-int-u5',
  templateUrl: './int-u5.page.html',
  styleUrls: ['./int-u5.page.scss'],
})
export class IntU5Page implements OnInit {

  constructor(private router: Router) { }

  aSelec_SU_U5(){
    this.router.navigate(['/selec-su-u5']);
  }

  ngOnInit() {
  }

}
