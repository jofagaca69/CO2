import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {ButtonModule} from 'primeng/button';
import {ComponentsSharedModule} from "../../components/shared/components-shared/components-shared.module";
import {
  ComponentsPrimeNgModule
} from "../../components/shared/components-prime-ng/components-prime-ng/components-prime-ng.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ButtonModule,
        ComponentsSharedModule,
        ComponentsPrimeNgModule,
        TranslateModule
    ]
})
export class HomeModule {
}
