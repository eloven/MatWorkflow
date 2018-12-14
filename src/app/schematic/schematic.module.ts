import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { HomeDragDropComponent } from './home-drag-drop/home-drag-drop.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { HomeTreeComponent } from './home-tree/home-tree.component';
import { NgxMaterialModule } from '../shared/ngx-material.module';

@NgModule({
  declarations: [
      FormsComponent,
      HomeDashComponent,
      HomeDragDropComponent,
      HomeNavComponent,
      HomeTableComponent,
      HomeTreeComponent,
  ],
  imports: [
    CommonModule,
    NgxMaterialModule,
  ],
  exports: [
    FormsComponent,
    HomeDashComponent,
    HomeDragDropComponent,
    HomeNavComponent,
    HomeTableComponent,
    HomeTreeComponent,
  ]
})
export class SchematicModule { }
