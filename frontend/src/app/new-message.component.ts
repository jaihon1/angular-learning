import { Component, Output, EventEmitter  } from "@angular/core";
import { WebService } from "./web.service";

@Component({
    selector: 'new-message',
    templateUrl: './new-message.component.html'
})

export class NewMessageComponent {

    @Output() onPosted = new EventEmitter();
    
    message = {
        owner: '',
        text: ''
    };


        

    constructor(private webService: WebService) {
        
    }


    post() {
        this.webService.postMessage(this.message);
        this.onPosted.emit(this.message);
    }
    


}

