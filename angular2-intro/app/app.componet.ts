import { Component } from '@angular/core';

interface ITodo {
    title: string;
    completed: boolean
}

const todos: ITodo[] = [
    {
        title: 'Task one',
        completed: true
    },
    {
        title: 'Second Task',
        completed: false
    },
    {
        title: 'End Task',
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'Angular 2Do';
    todos: ITodo[] = todos;

    toggle(item: ITodo) {
        item.completed = !item.completed;
    }

    delete(item: ITodo) {
        let index = this.todos.indexOf(item);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}