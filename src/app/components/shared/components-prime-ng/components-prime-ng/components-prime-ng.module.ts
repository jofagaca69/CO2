import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GMapModule} from "primeng/gmap";
import {DropdownModule} from "primeng/dropdown";
import {SpeedDialModule} from "primeng/speeddial";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GMapModule,
    DropdownModule,
    SpeedDialModule
  ],
  exports: [
    GMapModule,
    DropdownModule,
    SpeedDialModule
  ]
})
export class ComponentsPrimeNgModule { }
