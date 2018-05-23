import { Component } from '@angular/core';

const todos = [
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
    title = 'Angular 2Do';
    todos = todos;

    toggle(item:any) {
        item.completed = !item.completed;
    }

    delete(item:any) {
        let index = this.todos.indexOf(item);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}