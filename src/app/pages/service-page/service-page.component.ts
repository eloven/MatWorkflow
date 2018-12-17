import { Component, OnInit } from '@angular/core';
import { RouterBarData } from '../router-bar/router-bar.component';

@Component({
    selector: 'app-service-page',
    templateUrl: './service-page.component.html',
    styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {
    routerBar: RouterBarData;
    constructor() { }

    ngOnInit() {
        this.routerBar = {
            title: 'Service',
            subTitle: 'a reactive service package'
        }
    }

}
