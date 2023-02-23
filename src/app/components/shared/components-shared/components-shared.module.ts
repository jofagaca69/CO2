import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {ComponentsPrimeNgModule} from "../components-prime-ng/components-prime-ng/components-prime-ng.module";
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
    declarations: [
        HeaderNavbarComponent,
        CarouselComponent
    ],
    exports: [
        HeaderNavbarComponent,
        CarouselComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        TranslateModule,
        ComponentsPrimeNgModule
    ]
})
export class ComponentsSharedModule { }
