import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component ({
    selector: 'courses', // <courses> "courses"
    template: `
            <h2>{{ title }}</h2>
            <input type="text" autoGrow />
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
            `
})
export class CoursesComponent {
    title = "List of courses";
    courses: any;

    constructor (service: CoursesService) {
        this.courses = service.getCourses();
    }
}