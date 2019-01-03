import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { IndexComponent } from './pages/index/index.component';
import { SchematicPageComponent } from './pages/schematic-page/schematic-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { PluginPageComponent } from './pages/plugin-page/plugin-page.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RouterBarComponent } from './pages/router-bar/router-bar.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { HomeNavComponent } from './pages/home-nav/home-nav.component';
import { DashPageComponent } from './components/dash-page/dash-page.component';
import { UiPageComponent } from './components/ui-page/ui-page.component';
import { HttpPageComponent } from './components/http-page/http-page.component';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        HomeNavComponent,
        SchematicPageComponent,
        ServicePageComponent,
        PluginPageComponent,
        ComponentsPageComponent,
        LayoutComponent,
        RouterBarComponent,
        SideBarComponent,
        DashPageComponent,
        HttpPageComponent,
        UiPageComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        SharedModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
