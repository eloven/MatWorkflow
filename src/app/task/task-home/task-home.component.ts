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
  // 处理dropped事件
  handleMove(srcData, listData) {
    switch (srcData.tag) {
      case 'taskitem': {
        console.log('taskitem');
        break;
      }
      case 'tasklist': {
        console.log('tasklist');
        console.log(listData);
        // this.store$.dispatch(new listActions.SwapOrderAction({src: srcData.data, target: taskList}));
        break;
      }
      default:
        break;
    }
  }
}
