import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Todo } from "../models/todo";
import { TODOS } from "./todos-mock";

@Injectable({providedIn: 'root'})
export class TodoService {

  getTodos(): Observable<Todo[]> {
    const todos = of(TODOS);
    return todos;
  }

  getTodo(id: string): Observable<Todo> {
    const todo = TODOS.find(h => h.id === id)!;
    return of(todo);
  }

  deleteTodo(id: string) {
    const index = TODOS.findIndex(todo => todo.id === id);
    TODOS.splice(index, 1);
  }

  addNewTodo(todo:Todo) {
    TODOS.push(todo);
  }
}
