import { AutoGrowDirective } from './auto-grow.directive';
import { AuthorsComponent } from './../../../app2-authors/src/app/authors.component';
import { AuthorsService } from './../../../app2-authors/src/app/authors.service';
import { CoursesService } from './courses.service';
import { NgModule, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
