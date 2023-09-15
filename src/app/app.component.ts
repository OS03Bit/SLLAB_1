import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // standalone: true,
  // imports: [FormsModule, ReactiveFormsModule],
})
export class AppComponent {
  title = 'hello-world';
  todolist = ["Swimming-(incampus)", "Swimming-(out of campus)", "breakfast","college",
  "shopping"];
  message:string = 'Hello';
  swimout:string = '';
  swimin:string = '';
  eat:string = '';
  code:string = '';
  sleep:string = '';
  // isChecked:string = "Swimming";

}
