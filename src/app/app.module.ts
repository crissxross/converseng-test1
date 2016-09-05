import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { routing, appRoutingProviders } from './app.routing';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { SceneModule } from './scene/scene.module';
// import { SharedModule } from './shared/shared.module';
import { counterReducer } from './home/counter.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    routing,
    SceneModule,
    HomeModule,
    StoreModule.provideStore({counter: counterReducer}, {counter: 0})
    // SharedModule
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
