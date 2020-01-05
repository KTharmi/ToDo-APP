import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  public form: FormGroup;
  flag = this.route.snapshot.queryParams['isEdit'];

  constructor  (private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private todoservice: TodoListService) { }

  ngOnInit() {
    
    this.form = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      due_date: ['', [Validators.required]],
      priority: ['', [Validators.required, ]],
    });
    
  }
  onsubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.todoservice.addToDoList(this.form.value).subscribe(
        res => {
          //this.toastr.success('Inserted!', 'Success!',
      //  {timeOut: 2000});;
      //    this.router.navigate(['/viewhallcover']);
       });
    }
  }


}
