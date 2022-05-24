import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../shared/todo-service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  todo: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id =  Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id)
    .subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }

}
