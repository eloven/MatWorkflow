import { Component, OnInit } from '@angular/core';
import { RouterBarData } from '../router-bar/router-bar.component';
import { SideNavData } from '../side-bar/side-bar.component';

@Component({
    selector: 'app-plugin-page',
    templateUrl: './plugin-page.component.html',
    styleUrls: ['./plugin-page.component.scss']
})
export class PluginPageComponent implements OnInit {
    routerBar: RouterBarData;
    pluginSideNavData: SideNavData[];
    constructor() { }

    ngOnInit() {
        this.routerBar = {
            title: 'Plugin',
            subTitle: 'use plug-ins to make applications better'
        };
        this.pluginSideNavData = [
            {title: 'Ag-Gird',
            subList: [
                {name: 'Table show template', route: 'plugin/ag-gird'},
            ]},
            {title: 'Handson Table',
            subList: [
                {name: 'Table show template', route: 'plugin/hanson-table'},
            ]}
        ];
    }

}
