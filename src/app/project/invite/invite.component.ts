import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  groupPerson;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<InviteComponent>
  ) { }

  ngOnInit() {
    this.groupPerson = this.data;
  }
  /***
   *  处理dialog返回的数据
   ***/
  handleAction(result: boolean) {
    this.dialogRef.close(result);
  }
}
