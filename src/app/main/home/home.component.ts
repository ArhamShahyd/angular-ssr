import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommunicationService } from 'src/app/service/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // title: string = 'Swiftli - Commited to help real estate agents';

  constructor(
    private communicate: CommunicationService,
    private titleService: Title,
    private meta: Meta
  ) {
    // this.titleService.setTitle( this.title );
   }

  ngOnInit() {
  }

  searchProperty(event) {
    this.communicate.changeMessage(event.search);
  }

}
