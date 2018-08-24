import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface ConfirmDialog {
  title: string;
  content: string;
  confirmAction: string;
}
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  dialog: ConfirmDialog;
  project;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>) {
      if (this.data.dialog !== undefined || this.data.dialog !== null) {
        this.dialog = this.data.dialog;
      }
     }

  ngOnInit() {
    this.project = this.data;
  }
  /***
   *  处理dialog返回的数据
   ***/
  handleAction(result: boolean) {
    this.dialogRef.close(result);
  }
}
