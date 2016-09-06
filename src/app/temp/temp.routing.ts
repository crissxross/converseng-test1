import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempComponent } from './temp.component';

const tempRoutes: Routes = [
  { path: 'temp', component: TempComponent }
];

export const tempRouting: ModuleWithProviders = RouterModule.forChild(tempRoutes);
