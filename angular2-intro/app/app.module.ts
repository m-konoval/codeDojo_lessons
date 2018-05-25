/* APP.MODULE */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

// Main Component
import {AppComponent} from "./app.componet";

// Components
import {TodoFormComponent} from "./components/todo-form/todo-form.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";

// Services
import {TodoService} from "./services/todo.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})

export class AppModule {
}