import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TodosComponent } from './todos/todos.component';
import { DetailComponent } from './detail/detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TodosComponent,
    DetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/todos', pathMatch: 'full'},
      {path: 'todos/:id', component: DetailComponent},
      {path: 'todos', component: TodosComponent},
      {path: 'todos/:id/edit', component: FormComponent},
      {path: 'create', component: FormComponent}
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
