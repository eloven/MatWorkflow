import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    // 接收openDialog传过来的数据
    console.log(JSON.stringify(this.data));
  }
  onNoClick(): void {
    // 通过close传递消息给调用者
    this.dialogRef.close('我收到opendialog的消息');
  }
  onCancel(): void {
    this.dialogRef.close(null);
  }
}
