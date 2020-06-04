import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-int-u7',
  templateUrl: './int-u7.page.html',
  styleUrls: ['./int-u7.page.scss'],
})
export class IntU7Page implements OnInit {

  constructor(private router: Router) { }

  aSelec_SU_U7(){
    this.router.navigate(['/selec-su-u7']);
  }

  ngOnInit() {
  }

}
