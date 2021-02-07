import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
  title: string = 'Terms and Conditions';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) { 
    this.titleService.setTitle( this.title );
  }

  ngOnInit() {
  }

}
