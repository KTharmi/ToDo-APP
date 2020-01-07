import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit { displayedColumns: string[] = [ 'title', 'description', 'priority',  'dueDate'];
todoArray: any[];
editArray: any[];
public form: FormGroup;

  constructor  (private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private todoservice: TodoListService) { }


  ngOnInit() {
      this.todoservice.editToDoArray$.subscribe(data => {
        this.form = this._fb.group({
          id:[data[0].id,[Validators.required, Validators.min(1)]],
         title: [data[0].title, [Validators.required]],
         description: [data[0].description, [Validators.required]],
         priority: [data[0].priority, [Validators.required]],
         dueDate: [data[0].due_date,[Validators.required]],
         check: [data[0].check, [Validators.required]]
        });
      })
    }

    

    onUpdate() {
      if (this.form.valid) {
        console.log(this.form.get('id').value);
        this.todoservice.updateToDoList(this.form.value).subscribe(
          res => {
            this.router.navigate(['/todolist']);
          }
        );
       
      }
    }
  }
  