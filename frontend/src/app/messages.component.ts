import { Component } from "@angular/core";
import { WebService } from "./web.service";

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html'
})

export class MessagesComponent {
    messages: Message[];

    constructor(private webService : WebService) {
        
    }


    ngOnInit(){
        this.webService.getMessages().subscribe(data=>{
            this.messages = data;
            console.log("Getting messages from node");
            console.log(this.messages);
            return data;
        });
    } 

    //messages = [{text: 'some text', owner: 'Tim'}, {text: 'some other text', owner: 'Jim'}];

}

class Message {
    owner: string;
    message: string;


}

