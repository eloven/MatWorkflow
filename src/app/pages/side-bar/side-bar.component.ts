import { Component, OnInit, Input } from '@angular/core';

export interface SideNavData {
    title: string,
    subList: { name: string, route: string }[],
}

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    @Input() sideNavData: SideNavData[];
    constructor() { }

    ngOnInit() {}

}
