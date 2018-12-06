import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

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
export class CoreModule { }
