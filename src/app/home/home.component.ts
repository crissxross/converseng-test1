import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';
import { CastlistService } from '../core/castlist.service';

interface AppState {
  counter: number;
}

@Component({
  // selector: 'app-home', // unnecessary because via router
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'conversengine';
  counter: Observable<any>;
  // counter: Observable<number>; // this produced an error but it compiled
  actors;

  constructor(
    public store: Store<AppState>,
    public castlistService: CastlistService
  ) {
    this.counter = store.select('counter');
    this.castlistService.getMainActors();
    this.store.select('cast')
      .subscribe(cast => {
        this.actors = cast;
      });
   }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

}
