import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/service/property.service';
import { Title, Meta } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Utils } from 'utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  title: string = 'Property Posting';
  public userId: any;
  public propertyImage: any;
  public postedProperty: any;
  public getIPAddress: any;
  public latitude: any;
  public longitude: any;
  options = [
    {name:'Air Conditioner', value:'Air_conditioner', checked:false},
    {name:'Balcony Deck', value:'Balcony_deck', checked:false},
    {name:'Furnished', value:'Furnished', checked:false},
    {name:'Hardwood Floor', value:'Hardwood_floor', checked:false},
    {name:'Wheelchair Access', value:'Wheelchair_access', checked:false},
    {name:'Garage Parking', value:'Garage_parking', checked:false},
    {name:'Off Street Parking', value:'Off_street_parking', checked:false},
    {name:'Central Heating', value:'Central_heating', checked:false},
    {name:'Laundry Room', value:'Laundry_room', checked:false},
    {name:'Swimming Pool', value:'Swimming_pool', checked:false},
    {name:'Window Covering', value:'Window_covering', checked:false},
    {name:'Places to Seat', value:'Places_to_seat', checked:false},
  ]


  constructor(
    private propertyService: PropertyService,
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.titleService.setTitle( this.title );
    this.userId = localStorage.getItem('user_Id');
  }

  ngOnInit() {
    this.getCurrentAddress();
  }


  onSelectImage(event) {
    if (event.rejectedFiles.length !== 0) {
      this.toastr.success('please drag/upload file with Image format Only!');
    } else {
     this.propertyImage = event.addedFiles;
    }
  }


  onRemoveImage(event) {
    this.propertyImage.splice(this.propertyImage.indexOf(event), 1);
  }

  getCurrentAddress() {
    this.propertyService.getIPAddress().subscribe(data => {
      this.getIPAddress = data;
      this.latitude = this.getIPAddress.lat;
      this.longitude = this.getIPAddress.lon;
    });
  }


  matchNumbers(event) {
    if(event.keyCode == 32){
      return false;
    }
  }


  submitProperty(param) {
    if(param.form.status == 'VALID') {
      const propertyUserType = localStorage.getItem('propertyUserType');
      const propertyForm: any = {};
      // propertyForm.userType = propertyUserType;
      propertyForm.userId = this.userId;
      propertyForm.propertyTitle = param.value.propertyTitle;
      propertyForm.homeType = param.value.propertyType;
      propertyForm.location = param.value.location;
      propertyForm.area = param.value.area;
      propertyForm.tourAvailability = param.value.tourAvailability;
      propertyForm.rentPerMonth = param.value.rentPerMonth;
      propertyForm.description = param.value.description;
      propertyForm.features = this.options.filter(opt => opt.checked).map(opt => opt.name);
      propertyForm.imagesProperty = this.propertyImage;
      propertyForm.type = propertyUserType;
      propertyForm.yearBuild = param.value.yearBuild;
      propertyForm.price = param.value.price;
      propertyForm.beds = param.value.beds;
      propertyForm.bathroom = param.value.bathroom;
      propertyForm.securityDepositAmount = param.value.securityDepositAmount;
      propertyForm.dateAvailable = param.value.dateAvailable;
      propertyForm.additionalInformation = param.value.additionalInformation;
      propertyForm.postedByName = param.value.postedByName;
      propertyForm.emailOfUserPosted = param.value.emailOfUserPosted;
      propertyForm.phoneNumberOfPersonPosted = param.value.phoneNumberOfPersonPosted;
      propertyForm.latitude = this.latitude;
      propertyForm.longitude = this.longitude;
      Utils.blockPage();
      this.propertyService.addProperty(propertyForm).subscribe(data => {
        Utils.unblockPage();
        console.log(data);
        this.postedProperty = data;
        if (this.postedProperty.Success == true) {
          this.toastr.success('Property Posted Successfully!');
          this.router.navigate(['/']);
        }
      });
    } else {
      this.toastr.error('Invalid Fields');
    }
  }

}
