import { ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
// import { CommonModule } from '@angular/common'; // only if needed

import { ScenedataService } from './scenedata.service';
import { ConvoService } from './convo.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: []
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ScenedataService,
        ConvoService
      ]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
