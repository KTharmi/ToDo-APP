import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit { displayedColumns: string[] = [ 'title', 'description', 'due_date'];
todoArray: any[];
  constructor  (private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private todoservice: TodoListService) { }


  ngOnInit() {this.todoservice.getToDoList().subscribe(res => {
    console.log(res);
    this.todoArray = res.data;
  });

  }

}
