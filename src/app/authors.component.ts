import { AuthorsService } from './authors.service';
import { Component } from '@angular/core';

@Component ({
    selector: 'authors', // <courses> "courses"
    template: `
            <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let author of authors">
                    {{ author }}
                </li>
            </ul>
            `
})
export class CoursesComponent {
    title = "List of authors";
    courses: any;

    constructor (service: AuthorsService) {
        this.courses = service.getAuthors();
    }
}