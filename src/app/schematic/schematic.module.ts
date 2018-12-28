import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { HomeDragDropComponent } from './home-drag-drop/home-drag-drop.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { HomeTreeComponent } from './home-tree/home-tree.component';
import { NgxMaterialModule } from '../shared/ngx-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchematicRoutingModule } from './schematic.routing.module';

@NgModule({
  declarations: [
      FormsComponent,
      HomeDashComponent,
      HomeDragDropComponent,
      HomeTableComponent,
      HomeTreeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialModule,
    SchematicRoutingModule,
  ],
  exports: []
})
export class SchematicModule { }
