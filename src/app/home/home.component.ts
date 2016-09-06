import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CastlistService } from '../core/castlist.service';

// interface AppState { }

@Component({
  template: `
    <h1>{{title}}</h1>
    <hr color="grey">
    <h3>Cast List</h3>
    <h4>Main Actors</h4>
    <ul>
      <li *ngFor="let actor of actors">{{ actor }}</li>
    </ul>
`,
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'conversengine';
  actors;

  constructor(
    // public store: Store<AppState>,
    public store: Store<any>,
    public castlistService: CastlistService
  ) {
    this.castlistService.getMainActors();
    this.store.select('cast')
      .subscribe(cast => {
        this.actors = cast;
      });
   }

  ngOnInit() {
  }

}
