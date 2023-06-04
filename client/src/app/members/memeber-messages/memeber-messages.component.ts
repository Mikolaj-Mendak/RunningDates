import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
    selector: 'app-memeber-messages',
    templateUrl: './memeber-messages.component.html',
    styleUrls: ['./memeber-messages.component.css']
})
export class MemeberMessagesComponent {

    @ViewChild('messageForm') messageForm?: NgForm
    @Input() username?: string;
    @Input() messages: Message[] = [];
    messageContent = '';

    constructor(private messageService: MessageService) { }

    ngOnInit(): void {
        this.loadMessages()
        console.log(this.username)
    }

    sendMessage() {
        if (!this.username) return;
        this.messageService.sendMessage(this.username, this.messageContent).subscribe({
            next: message => {
                this.messages.push(message);
                this.messageForm?.reset();
            }
        })
    }

    loadMessages() {
        if (this.username) {
            this.messageService.getMessageThread(this.username).subscribe({
                next: messages => this.messages = messages
            })
        }
    }

}