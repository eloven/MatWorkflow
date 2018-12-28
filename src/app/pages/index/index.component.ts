import { Component, OnInit } from '@angular/core';
import { Themes } from 'src/app/config/theme.config';
import { RouterBarData } from '../router-bar/router-bar.component';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    routerBar: RouterBarData;
    constructor() { }

    ngOnInit() {
        this.routerBar = {
            title: 'Mat Work',
            subTitle: 'Angular Workflow Beautiful !',
        }
    }
    darkTheme(t: string) {
        Themes.changeTheme(t);
    }
}
