import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit { displayedColumns: string[] = [ 'title', 'description', 'priority', 'startDate', 'dueDate', 'edit','del'];
todoArray: any[];
editArray: any[];

  constructor  (private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private todoservice: TodoListService) { }


  ngOnInit() {
  }

  goEdit(data) {
    this.editArray = this.todoArray.filter(f => f.id == data);
    console.log("todo",this.editArray);
    this.router.navigate(['/addlist'], {queryParams: {  isEdit: true}});

    this.todoservice.updateToDoList(this.editArray);
  }

}
