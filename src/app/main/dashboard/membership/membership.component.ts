import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  title: string = 'Membership';
  public months =
  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public timeNow = new Date();
  public currentMonth: any;
  public nextMonth: any;
  public cuurentYear: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router
  ) { 
    this.titleService.setTitle( this.title );
  }

  ngOnInit() {
    this.currentMonth = this.months[this.timeNow.getMonth()];
    this.nextMonth = this.months[this.timeNow.getMonth() + 1];
    this.cuurentYear = this.timeNow.getFullYear();
  }

  getMembership() {
    this.router.navigate(['/user/membership']);
  }

}
