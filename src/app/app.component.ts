import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  isChecked = false;

  choices = [
    {id: 1, name: 'Choice 1'},
    {id: 2, name: 'Choice 2'},
    {id: 3, name: 'Choice 3'},
  ]

  choice = 1;
  value = 'some text input..';

  onChange($event: any) {
    console.log($event);
  }
}
