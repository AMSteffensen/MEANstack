import { WebService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-message',
  template: `
  <div *ngFor="let message of messages">
    <mat-card style="margin: 1em">
        <mat-card-title>
          {{message.owner}}
        </mat-card-title>
        <mat-card-content>
          {{message.text}}
        </mat-card-content>
    </mat-card>
  </div>`,
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private webService: WebService) { }

  async ngOnInit() {
    var response = await this.webService.getMessages();
    this.messages = response;
}

  messages = [];

}


