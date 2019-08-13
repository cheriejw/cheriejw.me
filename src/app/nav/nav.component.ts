import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  PORTFOLIO_NAME: string;

  constructor() {
    this.PORTFOLIO_NAME = 'Cherie Woo';
  }

  ngOnInit() {
  }

}
