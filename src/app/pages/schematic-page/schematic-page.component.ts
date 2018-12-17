import { Component, OnInit } from '@angular/core';
import { RouterBarData } from '../router-bar/router-bar.component';

@Component({
    selector: 'app-schematic-page',
    templateUrl: './schematic-page.component.html',
    styleUrls: ['./schematic-page.component.scss']
})
export class SchematicPageComponent implements OnInit {
    routerBar: RouterBarData;
    constructor() { }

    ngOnInit() {
        this.routerBar = {
            title: 'Schematic',
            subTitle: 'use schematic build quickly'
        }
    }

}
