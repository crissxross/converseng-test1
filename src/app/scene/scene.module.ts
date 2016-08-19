import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneComponent } from './scene.component';
import { ActorComponent } from './actor.component';
import { PlayerComponent } from './player.component';

import { sceneRouting } from './scene.routing';

@NgModule({
  imports: [
    CommonModule,
    sceneRouting
  ],
  declarations: [
    SceneComponent,
    ActorComponent,
    PlayerComponent
  ],
  providers: []
})
export class SceneModule { }
