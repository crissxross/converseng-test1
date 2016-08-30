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
  timer$ = Observable.timer(100, 2000);
  // for testing only:
  people$ = Observable.from(['Anne', 'Bev', 'Carol', 'Diane', 'Elsie', 'Freda', 'Gillian', 'Heather', 'Iris', 'Jane', 'Karen']);

  constructor(private scenedata: ScenedataService) { }

  getSceneConvo() {
    return this.convo$ = this.scenedata.getSceneData()
      .map(data => data.convo)
      .do(data => console.log('CALLED getSceneConvo:', data))
      .share();
  }

  // NOTE - use another filter to get the appropriate says or thinks
  // according to the index of option clicked
  // OR should it be according to the op/vk/un type of option clicked?


  getActorTurns() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'npc')
      .map(turn => turn['says'][0])
      // .do(x => console.log('getActorTurns:', x))
      .zip(this.timer$, (says, delay, period) => says);
      // .zip(this.interval$, (says, period) => says);
  }

  getPlayerTurns() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['says'][0])
      // .do(x => console.log('getPlayerTurns:', x))
      .zip(this.interval$, (says, period) => says)
      .delay(2000);
  }

  getPlayerThoughts() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['thinks'][0])
      // .do(x => console.log('getPlayerThoughts:', x))
      .zip(this.interval$, (thinks, period) => thinks)
      .delay(500);
  }

  getPlayerOptions() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['options'])
      // .do(x => console.log('getPlayerOptions:', x))
      .zip(this.interval$, (options, period) => options)
      .delay(1000);
  }

  getTitle() {
    return this.title;
  }

  getInterval() {
    return this.people$.zip(this.interval$, (peep, period) => period);
    // return this.interval$;
  }

  getPeepsAtInterval() {
    return this.people$.zip(this.interval$, (peep, period) => peep).share();
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
