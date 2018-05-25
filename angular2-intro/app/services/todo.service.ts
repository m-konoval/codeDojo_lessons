import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {todos} from "../shared/data";
import {Todo} from "../shared/todo";

@Injectable()

export class TodoService {
    todos: Todo[] = todos;

    constructor(private http: Http) {

    }

    getTodos(): Todo[] {
        return this.todos;
    }

    createTodo(title: string) {
        let todo = new Todo(title);

        this.todos.push(todo);
    }

    deleteTodo(todo: Todo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
    }
}