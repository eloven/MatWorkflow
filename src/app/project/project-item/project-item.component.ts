import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../share/confirm-dialog/confirm-dialog.component';
import { InviteComponent } from '../invite/invite.component';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  editProject(data) {
    console.log(data);
  }
  inviteProject() {
    const dialogRef = this.dialog.open(InviteComponent, {
      data: {'title': '邀请成员'}
    });
    dialogRef.afterClosed().subscribe( (dialogRes) => {
      console.log(dialogRes);
    });
  }
  deleteProject(data, ev) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe( (dialogRes) => {
      console.log(dialogRes);
    });
  }
}
