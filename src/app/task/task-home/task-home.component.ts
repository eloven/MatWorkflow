import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  // mock项目列表数据
  lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
  constructor() { }

  ngOnInit() {
  }

}
