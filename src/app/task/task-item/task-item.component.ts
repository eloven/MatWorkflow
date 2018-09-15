import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() projectItem;
  checked = false;
  constructor() { }

  ngOnInit() {
    // console.log(this.projectItem);
  }
  handleMove(srcData, itemData) {
    // 区别拖动事件源
    switch (srcData.tag) {
      case 'taskitem': {
        console.log('taskitem');
        console.log(itemData);
        break;
      }
      case 'tasklist': {
        console.log('tasklist');
        // this.store$.dispatch(new listActions.SwapOrderAction({src: srcData.data, target: taskList}));
        break;
      }
      default:
        break;
    }
  }

}
