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
import { TempModule } from './temp/temp.module';
// import { SharedModule } from './shared/shared.module';
import { counterReducer } from './temp/counter.reducer';
import { castReducer } from './core/cast.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    routing,
    SceneModule,
    HomeModule,
    TempModule,
    StoreModule.provideStore(
      { counter: counterReducer, cast: castReducer },
      { counter: 0 }
    )
    // SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
