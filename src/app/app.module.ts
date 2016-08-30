import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { SceneModule } from './scene/scene.module';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule.forRoot(),
    routing,
    SceneModule,
    HomeModule
    // SharedModule
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
