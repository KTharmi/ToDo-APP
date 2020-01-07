import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient ,HttpHeaders} from '@angular/common/http';
//import {Todo } from '../model/ToDo';
import {observable,BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TodoListService {
  
  constructor(private http: HttpClient ) { 
  }

  editToDoArray$ = new BehaviorSubject<any>({});

  editToDoList(data)
  {
   this.editToDoArray$.next(data);
  }

  addToDoList(form) {

    const data = {
      title: form.title,
      description: form.description,
      due_date: form.due_date,
      priority: form.priority,
      completed:form.completed
      
    };
    return this.http.post<any>('http://localhost:8000/api/list', data);

  }
  updateToDoList(form) {
    console.log(form);
    
    const data = {
      id:form.id,
      title: form.title,
     description: form.description,
      due_date: form.due_date,
      priority: form.priority,
      completed: form.completed,

    };
    return this.http.post<any>('http://localhost:8000/api/list/'+data.id,data)
  }
  

  viewToDoList(id)
  {
    return this.http.get<any>('http://localhost:8000/api/list/' + id);
  }
  deleteToDoList(id)
  {
    return this.http.delete<any>('http://localhost:8000/api/list/' + id);
  }

  getToDoList() {
    return this.http.get<any>('http://localhost:8000/api/lists');
  }

  selectionToDoList(form) {
    console.log(form.id);
    
    const data = {
      id:form.id,
      completed: form.completed,

    };
    return this.http.post<any>('http://localhost:8000/api/list/selection'+data.id,data)
  }

  
  
}
