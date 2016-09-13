import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';

/**
 * NGRX
 * Inject the Store service into your components and services.
 * The store.select method is used to obtain the appropriate
 * slice(s) of state from your application store - see:
 * StoreModule.provideStore(reducers, initialState) in app.module
 */

interface CountState {
  counter: number;
}

@Component({
  template: `
    <h2>TESTING ngrx/store:</h2>
    <div>
    <div>Current Count: {{ counter | async }}</div>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
    <hr color="grey">
    </div>
  `,
})
export class TempComponent implements OnInit {
  counter: Observable<any>;
  // counter: Observable<number>; // this produced an error but it compiled

  constructor(public store: Store<CountState>) {
    this.counter = store.select('counterReducer');
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
