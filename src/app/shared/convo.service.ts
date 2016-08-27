import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
import '../rxjs-operators';

import { ScenedataService } from './scenedata.service';
import { Convoturn } from './convoturn.model';

@Injectable()
export class ConvoService {
  title = 'conversengine';
  convo$: Observable<Convoturn[]>;
  interval$ = Observable.interval(2000);
  // for testing only:
  people$ = Observable.from(['Anne', 'Bev', 'Carol', 'Diane', 'Elsie', 'Freda', 'Gillian', 'Heather', 'Iris', 'Jane', 'Karen']);

  constructor(private scenedata: ScenedataService) { }

  getSceneConvo() {
    return this.convo$ = this.scenedata.getSceneData()
      .map(data => data.convo)
      .do(data => console.log('CALLED getSceneConvo:', data))
      .share();
  }

  getActorTurns() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'npc')
      .map(turn => turn['says'][0])
      .do(x => console.log('getActorTurns:', x))
      .zip(this.interval$, (says, val) => says);
  }

  getPlayerTurns() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['says'][0])
      .do(x => console.log('getPlayerTurns:', x))
      .zip(this.interval$, (says, val) => says);
  }

  getPlayerThoughts() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['thinks'][0])
      .do(x => console.log('getPlayerThoughts:', x))
      .zip(this.interval$, (thinks, val) => thinks);
  }

  getPlayerOptions() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['options'])
      .do(x => console.log('getPlayerOptions:', x))
      .zip(this.interval$, (options, val) => options);
  }

  getTitle() {
    return this.title;
  }

  getInterval() {
    return this.people$.zip(this.interval$, (peep, val) => val);
    // return this.interval$;
  }

  getPeepsAtInterval() {
    return this.people$.zip(this.interval$, (peep, val) => peep).share();
    // return Observable.zip(this.interval$, this.people$); // <-this first attempt was wrong
  }

// TEMPORARY experiment - for reference only:
  // getSceneConvo() {
  //   return this.convo$ = this.scenedata.getSceneData()
  //     .map(data => data.convo)
  //     .mergeMap(convo => convo)
  //     .map(convoturn => convoturn['says'][0]) // <- either this
  //     .map(convoturn => convoturn['thinks']) // <- or this
  //     .do(data => console.log('getSceneConvo:', data))
  //     .share();
  // }

}

