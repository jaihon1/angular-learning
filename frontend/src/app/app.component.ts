import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from "./messages.component";
import { NewMessageComponent } from "./new-message.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild(MessagesComponent, {static: false}) messages: MessagesComponent;

    onPosted(message) {
        console.log(message);
        
        //this.messages.messages.push(message);
    }
}
