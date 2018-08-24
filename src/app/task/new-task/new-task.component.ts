import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  form = '默认数据';
  constructor(
    private dialogRef: MatDialogRef<NewTaskComponent>
  ) { }

  ngOnInit() {
  }
  handelButton(result) {
    this.dialogRef.close(result);
  }
}
