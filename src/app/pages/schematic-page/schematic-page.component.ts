import { Component, OnInit } from '@angular/core';
import { RouterBarData } from '../router-bar/router-bar.component';
import { SideNavData } from '../side-bar/side-bar.component';

@Component({
    selector: 'app-schematic-page',
    templateUrl: './schematic-page.component.html',
    styleUrls: ['./schematic-page.component.scss']
})
export class SchematicPageComponent implements OnInit {
    routerBar: RouterBarData;
    schematicSideNavData: SideNavData[];
    constructor() { }

    ngOnInit() {
        this.routerBar = {
            title: 'Schematic',
            subTitle: 'use schematic build quickly'
        };
        this.schematicSideNavData = [
            {title: 'Forms',
            subList: [
                {name: 'Forms template', route: 'schematic/forms'},
            ]},
            {title: 'Dash',
            subList: [
                {name: 'Dash page template', route: 'schematic/home-dash'},
            ]},
            {title: 'Drag-drop',
            subList: [
                {name: 'Drag-drop template', route: 'schematic/home-drag-drop'},
            ]},
            {title: 'Table',subList: [
                {name: 'Table template', route: 'schematic/home-table'},
            ]},
            {title: 'Tree',subList: [
                {name: 'Tree template', route: 'schematic/home-tree'},
            ]}
        ];
    }

}
