/* TodoForm.COMPONENT */
import {Component} from '@angular/core';

import {TodoService} from "../../services/todo.service";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {
    title: string = '';

    constructor(private  todoService: TodoService) {

    }

    onSubmit() {
        this.todoService.createTodo(this.title);
    }
}