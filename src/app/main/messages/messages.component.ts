import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MessagesService } from 'src/app/service/messages.service';
import { PusherService } from 'src/app/service/pusher.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  title: string = 'Messages';
  public userId: any;
  public userRole: any;
  public getAll: any;
  public getAllMessages: any;
  public getSpecific: any;
  public getSpecificMessages: any;
  public sender: any;
  public receiver: any;
  public property: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private messageService: MessagesService,
    private pusherService: PusherService
  ) {
    this.titleService.setTitle( this.title );
    this.userId = localStorage.getItem('user_Id');
    this.userRole = localStorage.getItem('user_type');
   }

  ngOnInit() {
    this.getAllChats();
    // this.getSpecificChat();
  }

  getAllChats() {
    this.messageService.getAllMessages(this.userId).subscribe(data => {
      this.getAll = data;
      this.getAllMessages = this.getAll.messages;
    });
  }


  getSpecificChat(messageDetails) {
    // this.sender = messageDetails.createdBy._id;
    // this.receiver = messageDetails.createdFor._id;
    // this.property = messageDetails.propertyId._id;
    this.messageService.getSpecificMessage(messageDetails._id, this.userId).subscribe(data => {
      this.getSpecific = data;
      this.getSpecificMessages = this.getSpecific.allMessages;
    });
  }

  sendMessage(param) {
    const chatForm: any = {};
    chatForm.userId = this.userId;
    // chatForm.createdFor = this.sender;
    chatForm.propertyId = this.property;
    chatForm.userType = this.userRole;
    chatForm.message = param.message;
    this.messageService.postMessages(chatForm).subscribe(data => {
    });
  }


}
