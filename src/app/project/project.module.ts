import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    NewProjectComponent,
    InviteComponent],
  entryComponents: [NewProjectComponent, InviteComponent]
})
export class ProjectModule { }
