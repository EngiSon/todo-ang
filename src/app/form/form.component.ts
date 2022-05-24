import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { nanoid } from 'nanoid';
import { Todo } from '../models/todo';
import { TodoService } from '../shared/todo-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  todo!:Todo;
  create!: boolean;

  constructor(
    private route: ActivatedRoute,
    private todoService:TodoService,
    private location:Location
    ) {}

  ngOnInit(): void {
    this.route.url.subscribe(e => {
      this.create = e[0].path === 'create';
      console.log(this.create);
    });
    if (this.create) {
      this.todo = {
        id: nanoid(),
        name: "",
        description: "",
        picture: "https://www.pngitem.com/pimgs/m/143-1437130_transparent-postit-note-clipart-hd-png-download.png"
      }
    } else {
      this.getTodo();
    }
  }

  addNewTodo(): void {
    this.todoService.addNewTodo(this.todo!);
    this.goBack();
  }

  getTodo(): void {
    const id =  this.route.snapshot.paramMap.get('id')!;
    this.todoService.getTodo(id)
    .subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }



}
