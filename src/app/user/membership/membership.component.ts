import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  title: string = 'Membership Plans';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) { 
    this.titleService.setTitle( this.title );
  }

  ngOnInit() {
  }

}
