import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FeatureNgrxModule } from './feature-ngrx/feature-ngrx.module';
import { NgxsModule } from '@ngxs/store';
import { FeatureNgxsModule } from './feature-ngxs/feature-ngxs.module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FeatureMobxModule } from './feature-mobx/feature-mobx.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    FeatureNgrxModule,
    FeatureNgxsModule,
    FeatureMobxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
