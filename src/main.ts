import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// import { AppModule, environment } from './app/'; // re. intex.ts
import { AppModule } from './app/app.module';
import { environment } from './app/environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
