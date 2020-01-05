import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {
  displayedColumns: string[] = [ 'title', 'description', 'priority', 'startDate', 'dueDate', 'edit','del'];
  todoArray: any[];
  editArray: any[];

  constructor  (private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private todoservice: TodoListService) { }

  ngOnInit() {
  }
  onDelete(id){
    this.todoservice.deleteToDoList(id).subscribe(
      res => {
        window.location.reload();
        // this.toastr.success(this.form.get('stage_size').value+','+this.form.get('place_type').value+','+this.form.get('price').value+'!', 'Successfully Deleted!',
        // {timeOut: 4000});;
        // this.router.navigate(['/viewsound']);
      }
      );
    }
}
