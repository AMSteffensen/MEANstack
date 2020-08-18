import { MessagesComponent } from './messages/messages.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello {{ title }}</h1> <messages></messages> <jobs></jobs>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
