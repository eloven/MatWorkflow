import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { HomeDragDropComponent } from './home-drag-drop/home-drag-drop.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { HomeTreeComponent } from './home-tree/home-tree.component';

const routes: Routes = [
    {path: '', redirectTo: 'forms', pathMatch: 'full'},
    {path: 'forms' , component: FormsComponent},
    {path: 'home-dash' , component: HomeDashComponent},
    {path: 'home-drag-drop' , component: HomeDragDropComponent},
    {path: 'home-nav' , component: HomeNavComponent},
    {path: 'home-table' , component: HomeTableComponent},
    {path: 'home-tree' , component: HomeTreeComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class SchematicRoutingModule { }
