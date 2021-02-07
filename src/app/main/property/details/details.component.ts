import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PropertyService } from 'src/app/service/property.service';
import { Title, Meta } from '@angular/platform-browser';
import { Utils } from 'utils';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // title: string = 'Property Details';
  public propertyId: any;
  public userId: any;
  public propertyRes: any;
  public propertyDetails: any = {};
  public userPropertyDetails: any = {};
  public userInfoBrokerage: any;
  public userInfoAgent: any = {};
  public token_access: any = {};
  public userRole: any;
  public leadGenerate: any;
  public latitude: any;
  public longitude: any;
  public zoom: number = 15;

  /* Google Maps Angular */
  // latitude = -28.68352;
  // longitude = -147.20785;
  // mapType = 'satellite';
  /* Google Maps Angular End */

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private propertyService: PropertyService,
    private meta: Meta,
    private title: Title
  ) {
    this.route.params.subscribe(params => {
      this.propertyId = params.id;
      this.getProperty();
    });
  }

  ngOnInit() {
    this.userId = localStorage.getItem('user_Id');
    this.userRole = localStorage.getItem('user_type');
    this.token_access = localStorage.getItem('token');
  }


  getProperty() {
    // Utils.blockPage();

    this.propertyService.getPropertyById(this.propertyId).subscribe(data => {
      this.propertyRes = data;
      this.title.setTitle(this.propertyRes.property.propertyTitle);
      this.meta.updateTag({ property: 'og:description', content: this.propertyRes.property.propertyTitle });
      this.meta.updateTag({ property: 'og:image', content: this.propertyRes.property.imagesProperty[0] });
      // Utils.unblockPage();
      this.propertyDetails = this.propertyRes.property;
      this.longitude = this.propertyDetails.longitude;
      this.latitude = this.propertyDetails.latitude;
      // this.userInfoBrokerage = this.propertyDetails.brokerId;
      // this.userInfoAgent = this.propertyDetails.brokerId;
      this.userInfoBrokerage = this.propertyDetails.brokerId;
      this.userInfoAgent = this.propertyDetails.createdBy;

      // if (this.propertyDetails.createdBy) {
      //   this.userPropertyDetails = this.propertyDetails.createdBy;
      // } else {
      //   this.userPropertyDetails = this.propertyDetails.brokerId;
      // }
    });
  }

  userStory() {
    this.propertyService.userPointStory(this.propertyId).subscribe(data => {
      this.toastr.success('Property Shared Successfully!');
    });
  }


  buyerLeads(leadForm) {
    const param: any = {};
    // param.userId = this.userId;
    param.propertyId = this.propertyId;
    param.name = leadForm.value.name;
    param.email = leadForm.value.email;
    param.phoneNumber = leadForm.value.phoneNumber;
    param.description = leadForm.value.description;
    if (this.userRole === 'agent') {
      this.toastr.error('Agents Not Allowed!');
    } else if (leadForm.status === 'VALID') {
      // Utils.blockPage();
      this.propertyService.buyerLeads(param).subscribe(data => {
        // Utils.unblockPage();
        this.leadGenerate = data;
        if (this.leadGenerate.Success === true) {
          this.toastr.success('Lead Generate Successfully!');
        } else {
          this.toastr.error(this.leadGenerate.message);
        }
      });
    } else {
      this.toastr.error('Invalid Fields');
    }
  }

}
