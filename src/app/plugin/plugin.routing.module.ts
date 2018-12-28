import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGirdComponent } from './ag-gird/ag-gird.component';
import { HandsonTableComponent } from './handson-table/handson-table.component';

const routes: Routes = [
    {path: '', redirectTo: 'hanson-table', pathMatch: 'full'},
    {path: 'ag-gird', component: AgGirdComponent},
    {path: 'hanson-table', component: HandsonTableComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class PluginRoutingModule { }
