import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SceneModule } from './scene/scene.module';
import { SharedModule } from './shared/shared.module';

// import { ScenedataService } from './shared/scenedata.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule,
    HttpModule,
    routing,
    SceneModule,
    // SharedModule
    SharedModule.forRoot()
  ],
  providers: [
    appRoutingProviders,
    // ScenedataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
