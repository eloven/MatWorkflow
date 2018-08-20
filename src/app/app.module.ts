import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 根路由
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 核心模块
import { CoreModule } from './core/core.module';
// 共享模块
import { ShareModule } from './share/share.module';
// Mat侧边栏模块
import { MatSidenavModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ShareModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
