import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/service/agent.service';
import { ToastrService } from 'ngx-toastr';
// import { utils } from 'protractor';
import { Title, Meta } from '@angular/platform-browser';
import { Utils } from 'utils';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  title: string = 'Agent Details';
  public userId: any;
  public userDetail: any = {};
  public userBrokerage: any = {};
  public reviews: any;
  public userdetailRating: any = {};
  public p: any;
  public reviewResponse: any;
  public userResponse: any;
  public giveReview: boolean = false;
  public showReviews: boolean = true;
  // Variables
  public knowledge: any;
  public expertise: any;
  public responsive: any;
  public skills: any;
  public role: any;
  public userType: any;
  public userProperty: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agentService: AgentService,
    private toastr: ToastrService,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle( this.title );
  }

  ngOnInit() {
    this.role = localStorage.getItem('token');
    this.userType = localStorage.getItem('user_type');
    this.route.params.subscribe(params => {
      this.userId = params.id;
   });
    this.getAgentDetails();
    this.getAgentReview();
  }


  getAgentDetails() {
    const id = this.userId;
    Utils.blockPage();
    this.agentService.getAgentById(id).subscribe(data => {
      Utils.unblockPage();
      this.userResponse = data;
      this.userDetail = this.userResponse.Users[0];
      this.userBrokerage = this.userDetail.company;
      this.userdetailRating = this.userDetail;
      this.userProperty = this.userResponse.propertyDetails;
    });
  }

  agentRatings() {
    this.showReviews = false;
    this.giveReview = true;
  }


  buyerLeads(leadForm) {
    const param: any = {};
    // param.userId = this.userId;
    param.propertyId = this.userProperty[0]._id;
    param.name = leadForm.value.name;
    param.email = leadForm.value.email;
    param.phoneNumber = leadForm.value.phoneNumber;
    param.description = leadForm.value.description;
    if (this.userType === 'agent') {
      this.toastr.error('Agents Not Allowed!');
    } else if (leadForm.status === 'VALID' && this.userType !== 'agent') {
      Utils.blockPage();
      this.agentService.buyerLeads(param).subscribe(data => {
        Utils.unblockPage();
        this.toastr.success('Lead Generate Successfully!');
      });
    }
  }

  openSocialMedia(url) {
    if (url) {
      this.router.navigate([]).then(result => {  window.open('//' + url, '_blank'); });
    } else {
      this.router.navigate([]).then(result => {  window.open('//' + '/', '_blank'); });
    }
  }



  localKnowledge(event) {
    this.knowledge = event;
  }

  processExpertise(event) {
    this.expertise = event;
  }

  responsiveness(event) {
    this.responsive = event;
  }

  negotiationSkills(event) {
    this.skills = event;
  }

  postReviews(param) {
    const reviewVal = this.knowledge + this.expertise + this.responsive + this.skills;
    const totalReview = (reviewVal / 4).toFixed();
    const postReview: any = {};
    postReview.userId = this.userId;
    postReview.createdBy = localStorage.getItem('user_Id');
    postReview.messageReview = param.value.messageReview;
    postReview.serviceProvidedFor = param.value.serviceProvidedFor;
    postReview.yearOfService = param.value.yearOfService;
    postReview.email = param.value.email;
    postReview.totalReviewStar = totalReview;
    postReview.localKnowledge = this.knowledge;
    postReview.processExpertise = this.expertise;
    postReview.responsiveness = this.responsive;
    postReview.negotiationSkills = this.skills;

    if (param.status === 'VALID') {
      Utils.blockPage();
      this.agentService.postReviews(postReview).subscribe( data => {
        Utils.unblockPage();
        this.toastr.success('Review Posted!');
        this.getAgentReview();
        this.showReviews = true;
        this.giveReview = false;
      });
    } else {
      this.toastr.error('Invalid Fields');
    }
  }

  ignoreReview() {
    this.showReviews = true;
    this.giveReview = false;
  }


  getAgentReview() {
    this.agentService.getReviews(this.userId).subscribe( data => {
      this.reviewResponse = data;
      this.reviews = this.reviewResponse.reviews;
    });
  }



  // onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
  //   alert(`Old Value:${$event.oldValue};
  //   console.log('ratings', ${$event.oldValue});
  //     New Value = ${$event.newValue};
  //     Checked Color = ${$event.starRating.checkedcolor};
  //     Unchecked Color = ${$event.starRating.uncheckedcolor}`);
  // }

}
