import { Component } from "@angular/core";
import { WebService } from "./web.service";

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html'
})

export class MessagesComponent {
    messages: Object;

    constructor(private webService : WebService) {
        
    }
    async ngOnInit(){
        this.messages = await this.webService.getMessages();
        console.log("Getting messages from node");
        console.log(this.messages);
    } 

    //messages = [{text: 'some text', owner: 'Tim'}, {text: 'some other text', owner: 'Jim'}];

}

