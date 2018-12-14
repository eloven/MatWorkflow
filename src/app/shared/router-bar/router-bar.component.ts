import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-router-bar',
    templateUrl: './router-bar.component.html',
    styleUrls: ['./router-bar.component.scss']
})
export class RouterBarComponent implements OnInit {
    @Input() title: string;
    constructor() { }

    ngOnInit() {
        this.title = '标题'
    }

}
