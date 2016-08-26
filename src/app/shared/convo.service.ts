import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// don't know why I have to import interval again
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/observable/combineLatest';
import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

import { ScenedataService } from './scenedata.service';
import { Convoturn } from './convoturn.model';

@Injectable()
export class ConvoService {
  title = 'conversengine';
  interval$ = Observable.interval(2000);
  people$ = Observable.from(['Anne', 'Bev', 'Carol', 'Diane', 'Elsie', 'Freda', 'Gillian', 'Heather', 'Iris', 'Jane', 'Karen']);
  convo$: Observable<any>;

  constructor(private scenedata: ScenedataService) { }

  getSceneConvo() {
   return this.scenedata.getSceneData()
      .map(data => data.convo)
      // NOTE: mergeMap etc. is just my temporary test
      .do(data => console.log('before mergeMap:', data))
      .mergeMap(data => data)
      // .map(data => data.says)
      // .map(says => says[0])
      .do(data => console.log('after:', data, 'isArray:', Array.isArray(data)));
  }

  getTitle() {
    return this.title;
  }

  getInterval() {
    // return this.interval$;
    return this.people$.zip(this.interval$, (peep, val) => val);
  }

  getPeepsAtInterval() {
    // return Observable.zip(this.interval$, this.people$); // <-my first attempt
    return this.people$.zip(this.interval$, (peep, val) => peep);
  }

}
