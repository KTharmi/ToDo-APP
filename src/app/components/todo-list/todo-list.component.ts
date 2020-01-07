import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    this.todoArrayUndone = this.todoArray.filter(f => f.completed == 'uncompleted');
  });
  }
}
  //  onsubmit() {
  //   if (id) {
  //     console.log(this.form.value);
  //     this.todoservice.selectionToDoList(this.form.value).subscribe(
  //       res => {
  //         //this.toastr.success('Inserted!', 'Success!',
  //     //  {timeOut: 2000});;
  //       this.router.navigate(['/viewlist']);
  //      });
  //   }
  // }
