import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenedataService } from './scenedata.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [CommonModule],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ScenedataService]
    };
  }
}
// Alternatively, it can be easier to
// provide services in the root app.module
// but providing a service via SharedModule.forRoot() is
// preferable if lazy loading modules - see docs