import { Component, OnInit } from '@angular/core';
import { RouterBarData } from '../router-bar/router-bar.component';

@Component({
    selector: 'app-plugin-page',
    templateUrl: './plugin-page.component.html',
    styleUrls: ['./plugin-page.component.scss']
})
export class PluginPageComponent implements OnInit {
    routerBar: RouterBarData;
    constructor() { }

    ngOnInit() {
        this.routerBar = {
            title: 'Plugin',
            subTitle: 'use plug-ins to make applications better'
        }
    }

}
