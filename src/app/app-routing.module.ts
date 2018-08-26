import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskHomeComponent } from './task/task-home/task-home.component';
import { ProjectListComponent } from './project/project-list/project-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'task', pathMatch: 'full'},
  // 路由懒加载，独立模块路由
  {path: 'user', loadChildren: '../app/login/login.module#LoginModule'},
  {path: 'task', component: TaskHomeComponent},
  {path: 'project', component: ProjectListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
