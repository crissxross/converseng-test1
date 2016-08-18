import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SceneComponent } from './scene/scene.component';
import { ActorComponent } from './scene/actor.component';
import { PlayerComponent } from './scene/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SceneComponent,
    ActorComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
