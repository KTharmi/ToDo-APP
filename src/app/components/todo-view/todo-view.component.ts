import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {phnArray: any[];
  editArray: any[];
  filterrArray:any[];

  constructor  (
    private router: Router, private todoservice: TodoListService) { }
  ngOnInit() {
    //this.todoservice.
  }

}
