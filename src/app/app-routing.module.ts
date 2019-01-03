import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SchematicPageComponent } from './pages/schematic-page/schematic-page.component';
import { PluginPageComponent } from './pages/plugin-page/plugin-page.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { DashPageComponent } from './components/dash-page/dash-page.component';
import { UiPageComponent } from './components/ui-page/ui-page.component';
import { HttpPageComponent } from './components/http-page/http-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, children: [
        {path: '', redirectTo: 'dash', pathMatch: 'full'},
        {path: 'dash', component: DashPageComponent}
    ]},
    {path: 'service', component: ServicePageComponent, children: [
      {path: '', redirectTo: 'http', pathMatch: 'full'},
      {path: 'http', component: HttpPageComponent}
    ]},
    {path: 'components', component: ComponentsPageComponent, children: [
      {path: '', redirectTo: 'ui', pathMatch: 'full'},
      {path: 'ui', component: UiPageComponent}
    ]},
    {path: 'plugin', component: PluginPageComponent, children: [
        {path: '', loadChildren: './plugin/plugin.module#PluginModule'},
    ]},
    {path: 'schematic', component: SchematicPageComponent, children: [
        {path: '', loadChildren: './schematic/schematic.module#SchematicModule'}
    ]},
    {path: '**', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
