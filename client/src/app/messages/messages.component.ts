import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { MessageService } from '../_services/message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    messages?: Message[];
    container = 'Unread';
    loading = false;

    constructor(private messageService: MessageService) {

    }
    ngOnInit(): void {
        this.loadMessages();
    }

    loadMessages() {
        this.loading = true;
        this.messageService.getMessages(this.container).subscribe({
            next: response => {
                this.messages = response;
                this.loading = false;
            }
        })

    }
}
