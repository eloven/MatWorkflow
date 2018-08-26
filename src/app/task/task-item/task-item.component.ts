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
    console.log(this.projectItem);
  }

}
