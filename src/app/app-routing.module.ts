import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SchematicPageComponent } from './pages/schematic-page/schematic-page.component';
import { PluginPageComponent } from './pages/plugin-page/plugin-page.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, children: [

    ]},
    {path: 'service', component: ServicePageComponent, children: [

    ]},
    {path: 'components', component: ComponentsPageComponent, children: [

    ]},
    {path: 'plugin', component: PluginPageComponent, children: [

    ]},
    {path: 'schematic', component: SchematicPageComponent, children: [
        {path: '', loadChildren: './schematic/schematic.module#SchematicModule'}
    ]},
    {path: '**', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
