import { Component, OnInit, Input } from '@angular/core';

export interface RouterBarData {
    title: string,
    subTitle: string,
}
@Component({
    selector: 'app-router-bar',
    templateUrl: './router-bar.component.html',
    styleUrls: ['./router-bar.component.scss']
})
export class RouterBarComponent implements OnInit {
    @Input() routerBar: RouterBarData;
    constructor() { }

    ngOnInit() {

    }

}
