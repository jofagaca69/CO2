import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsSharedModule} from "./components/shared/components-shared/components-shared.module";
import {
  ComponentsPrimeNgModule
} from "./components/shared/components-prime-ng/components-prime-ng/components-prime-ng.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsSharedModule,
    ComponentsPrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
