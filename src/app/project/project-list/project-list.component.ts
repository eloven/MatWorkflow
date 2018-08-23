import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {title: '第一个项目'},
    {title: '第二个项目'},
    {title: '第三个项目'}
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openNewPeojectDialog() {
    // 发送dialog消息
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {name: '项目名字', time: '2018年'}});
    // 接收返回的消息
    dialogRef.afterClosed().subscribe(data => console.log(data));
  }
}
