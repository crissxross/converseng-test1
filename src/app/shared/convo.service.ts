import { Injectable } from '@angular/core';

import { ScenedataService } from './scenedata.service';

@Injectable()
export class ConvoService {
  title = 'conversengine';

  constructor(private scenedata: ScenedataService) { }

  getTitle() {
    return this.title;
  }

}
