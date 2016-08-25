import { Injectable } from '@angular/core';

import { ScenedataService } from './scenedata.service';
import { Convoturn } from './convoturn.model';

@Injectable()
export class ConvoService {
  title = 'conversengine';

  constructor(private scenedata: ScenedataService) { }

  getSceneConvo() {
    return this.scenedata.getSceneData()
      .map(data => data.convo)
      // NOTE: mergeMap is just my temporary test
      // .do(data => console.log('before mergeMap:', data))
      // .mergeMap(data => data)
      .do(data => console.log(data, 'isArray:', Array.isArray(data)));
  }

  getTitle() {
    return this.title;
  }

}
