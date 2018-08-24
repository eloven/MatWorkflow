import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  form = '默认数据';
  receivedDialog;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NewTaskComponent>
  ) { }

  ngOnInit() {
    this.receivedDialog = this.data;
    console.log(this.receivedDialog);
  }
  handelButton(result) {
    this.dialogRef.close(result);
  }
}
