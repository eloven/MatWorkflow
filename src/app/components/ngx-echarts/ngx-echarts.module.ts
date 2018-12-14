import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsComponent } from './ngx-echarts.component';

@NgModule({
  declarations: [NgxEchartsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NgxEchartsComponent
  ]
})
export class NgxEchartsModule { }
