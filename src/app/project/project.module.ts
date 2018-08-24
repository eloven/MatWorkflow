import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import { ConfirmDialogComponent } from '../share/confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    NewProjectComponent,
    InviteComponent],
  entryComponents: [NewProjectComponent, InviteComponent, ConfirmDialogComponent]
})
export class ProjectModule { }
