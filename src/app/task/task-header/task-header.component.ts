import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  constructor(private matdialog: MatDialog) { }

  ngOnInit() {
  }
  openNewTask() {
    const dialogRef = this.matdialog.open(NewTaskComponent, {data: '打开new-task'});
    dialogRef.afterClosed().subscribe( (res) => {
      console.log(res);
    });
  }
}
