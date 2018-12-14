import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaterialModule } from './ngx-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxEchartsModule } from '../components/ngx-echarts/ngx-echarts.module';
import { RouterBarComponent } from './router-bar/router-bar.component';

@NgModule({
    declarations: [
        RouterBarComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgxMaterialModule,
        NgxEchartsModule,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgxMaterialModule,
        NgxEchartsModule,
        RouterBarComponent,
    ]
})
export class SharedModule { }
