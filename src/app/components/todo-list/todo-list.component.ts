import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit { displayedColumns: string[] = [ 'completed','title', 'description', 'due_date'];

todoArray: any[];
todoArrayUndone: any[];
  constructor  (private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private todoservice: TodoListService) { }


  ngOnInit() {this.todoservice.getToDoList().subscribe(res => {
    console.log(res);
    this.todoArray = res.data;
    this.todoArrayUndone = this.todoArray.filter(f => f.completed == 'completed');
  });
  }
  
  onDone(todo) {
    const data1 = {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      priority: todo.priority,
      startDate: todo.startDate,
      due_date: todo.dueDate,
      completed: 'completed'
     }
     this.todoservice.selectionToDoList(data1).subscribe(
      res => {
      this.router.navigate(['/viewlist']);
     });

  } 
}
