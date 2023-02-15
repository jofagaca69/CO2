import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        HeaderNavbarComponent
    ],
    exports: [
        HeaderNavbarComponent
    ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class ComponentsSharedModule { }
