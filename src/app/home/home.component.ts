import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-home', // unnecessary because via router
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'conversengine';

  constructor() { }

  ngOnInit() {
  }

}
