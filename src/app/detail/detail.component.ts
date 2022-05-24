import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../shared/todo-service';
import {Location} from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  todo!: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id =  this.route.snapshot.paramMap.get('id')!;
    this.todoService.getTodo(id)
    .subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id);
    this.goBack();
  }

  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }
}
