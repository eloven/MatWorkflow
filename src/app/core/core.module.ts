import { NgModule, SkipSelf, Optional } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// 共享模块
import { ShareModule } from '../share/share.module';
// Mat Icon
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utills/svg.utills';

@NgModule({
  imports: [
    ShareModule,
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor (
    // 核心模块只加载一次
    @Optional() @SkipSelf() parent: CoreModule,
    // Icon 依赖注入
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    if (parent) {
      throw Error('模块已经存在');
    }
    // 加载icon的方法
    loadSvgResources(iconRegistry, sanitizer);
  }
 }
