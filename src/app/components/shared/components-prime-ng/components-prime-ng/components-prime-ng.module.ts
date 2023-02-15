import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GMapModule} from "primeng/gmap";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GMapModule
  ],
  exports: [
    GMapModule
  ]
})
export class ComponentsPrimeNgModule { }
