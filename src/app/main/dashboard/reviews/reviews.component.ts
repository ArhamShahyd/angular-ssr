import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AgentService } from 'src/app/service/agent.service';
import { Utils } from 'utils';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  title: string = 'Dashboard';
  public userId: any;
  public publicReviews: any;
  public profileReview: any;
  public p: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private agentService: AgentService
  ) {
    this.titleService.setTitle( this.title );
    this.userId = localStorage.getItem('user_Id');
   }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    Utils.blockPage();
    this.agentService.getReviews(this.userId).subscribe(data => {
      Utils.unblockPage();
      this.publicReviews = data;
      this.profileReview = this.publicReviews.reviews;
    });
  }

}
