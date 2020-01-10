import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {MessageComponent } from '../message/message.component'

@Component({
  selector: 'todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {displayedColumns: string[] = [ 'title', 'description', 'priority', 'completed','created_at', 'due_date','edit','del'];
displayedColumns2: string[] = [ 'title', 'description', 'priority', 'completed','created_at', 'due_date', 'edit','del'];
  todoArray: any[];
  todoArrayDone: any[];
  todoArrayUndone: any[];
  editArray: any[];

  constructor  (private _fb: FormBuilder, private todoservice: TodoListService,  private router: Router, private route: ActivatedRoute,public dialog: MatDialog) { }
  ngOnInit() {this.todoservice.getToDoList().subscribe(res => {
    console.log(res);
    this.todoArray = res.data;
  });

  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
        this.todoservice.deleteToDoList(id).subscribe(
          res => {
            window.location.reload();
            this.router.navigate(['/todoList']);
          }
        );
      }
      else{
        
      }
    });
 
    }

     goEdit(data){
      this.editArray = this.todoArray.filter(f => f.id == data);
       console.log("todo",this.editArray);
      this.router.navigate(['/editlist']);
  
      this.todoservice.editToDoList(this.editArray);
     };
   

    }
