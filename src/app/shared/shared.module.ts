import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterailModule } from './materail.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterailModule,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterailModule,
    ]
})
export class SharedModule { }
