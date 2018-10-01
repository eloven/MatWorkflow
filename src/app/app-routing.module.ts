import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskHomeComponent } from './task/task-home/task-home.component';
import { ProjectListComponent } from './project/project-list/project-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'task', pathMatch: 'full'},
  // 路由懒加载，独立模块路由
  {path: 'user', loadChildren: '../app/login/login.module#LoginModule', data: { keep: false}},
  {path: 'task', component: TaskHomeComponent, data: { keep: true}},
  {path: 'project', component: ProjectListComponent, data: { keep: true}},
  {path: '**', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
