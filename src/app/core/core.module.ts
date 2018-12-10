import { NgModule, SkipSelf, Optional } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.utils';

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
    ],
    providers: [
        {
            provide: 'BASE_API', useValue: {
                host: 'http: 127.0.0.1:3000/api/'
            }
        }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parent: CoreModule,
     // register icons
     iconRegistry: MatIconRegistry,
     sanitizer: DomSanitizer) {
        if (parent) {
            throw Error('模块已经存在');
        }
        // load icons
        loadSvgResources(iconRegistry, sanitizer);
    }
}
