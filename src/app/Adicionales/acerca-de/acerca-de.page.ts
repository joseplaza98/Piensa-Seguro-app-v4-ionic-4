import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aBiblio(){
    this.router.navigate(['/bibliografia'])
  }

}
