import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-int-u6',
  templateUrl: './int-u6.page.html',
  styleUrls: ['./int-u6.page.scss'],
})
export class IntU6Page implements OnInit {

  constructor(private router: Router) { }

  aSelec_SU_U6(){
    this.router.navigate(['/selec-su-u6']);
  }

  ngOnInit() {
  }

}
