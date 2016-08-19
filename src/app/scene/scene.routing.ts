import { Routes, RouterModule } from '@angular/router';

import { SceneComponent } from './scene.component';

const sceneRoutes: Routes = [
  { path: 'scene', component: SceneComponent }
];

export const sceneRouting = RouterModule.forChild(sceneRoutes);
