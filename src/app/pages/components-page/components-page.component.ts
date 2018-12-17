import { Component, OnInit } from '@angular/core';
import { RouterBarData } from '../router-bar/router-bar.component';

@Component({
    selector: 'app-components-page',
    templateUrl: './components-page.component.html',
    styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent implements OnInit {
    routerBar: RouterBarData
    constructor() { }

    ngOnInit() {
        this.routerBar = {
            title: 'Components',
            subTitle: 'web components and more useful combinations',
        }
    }

}
