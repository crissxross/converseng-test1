import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SceneComponent } from './scene/scene.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'scene', component: SceneComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
