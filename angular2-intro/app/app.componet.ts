import { Component } from '@angular/core';

const todos = [
    'Task one',
    'Second Task',
    'End Task'
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
}