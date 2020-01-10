import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { TodoDeleteComponent } from './components/todo-delete/todo-delete.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'addlist',
    component: TodoAddComponent
  },


  {
    path: 'viewlist',
    component: TodoViewComponent
  },
  {
    path: 'editlist',
    component: TodoEditComponent
  },


  {
    path: 'todolist',
    component: TodoListComponent
  },
  {
    path: 'deletelist',
    component: TodoDeleteComponent
  },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard] 
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
