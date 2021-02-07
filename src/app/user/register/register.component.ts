import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { Title, Meta }     from '@angular/platform-browser';
import { Utils } from 'utils';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title: string = 'User Registration';
  public data: any;
  public userRole: boolean = false;
  firstForm: NgForm;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle( this.title );
   }

  ngOnInit() {
    const role = JSON.parse(localStorage.getItem('registerUser'));
    if(role.userType == true){
      this.userRole = true;
    }
  }


  matchNumbers(event) {
    if(event.keyCode == 32){
      return false;
    }
  }

 userCreateForm(param) {
    this.data = JSON.parse(localStorage.getItem('registerUser'));
    const userForm: any = {};
    userForm.email = this.data.emailId;
    userForm.firstName = param.value.firstName;
    userForm.lastName = param.value.lastName;
    // if(this.data.userType == true){
    //   userForm.userType = 'agent';
    // }else{
    //   userForm.userType = param.value.userType;
    // }
    userForm.password = this.data.UserPassword;
    userForm.phoneNumber = param.value.phoneNumber;
    userForm.profileImage = param.value.profileImage;
    userForm.address = param.value.address;
    userForm.message = param.value.message;
    userForm.screenName = param.value.screenName;
    // userForm.realEstateId = param.value.realEstateId;
    userForm.aggrement = param.value.aggrement;
    userForm.allow_user_to_message = param.value.allow_user_to_message;
    userForm.allow_user_to_contact_you = param.value.allow_user_to_contact_you;
    userForm.professionalTitle = param.value.professionalTitle;
    if (this.data.userType === true) {
      userForm.userType = 'agent';
    } else {
      userForm.userType = param.value.userType;
    }
    // userForm.professionCategory = param.value.professionCategory;
    userForm.professionCategory = 'agent';
    userForm.brokerageName = param.value.brokerageName;
    userForm.brokerageAddress = param.value.brokerageAddress;
    userForm.timeZone = param.value.timeZone;
    userForm.cityStateZip = param.value.cityStateZip;
    userForm.primaryPhone = param.value.primaryPhone;
    userForm.brokeragePhone = param.value.brokeragePhone;
    userForm.serviceAreas = param.value.serviceAreas;
    userForm.inBusiness = param.value.inBusiness;
    userForm.facebook = param.value.facebook;
    userForm.twitter = param.value.twitter;
    userForm.instagram = param.value.instagram;
    userForm.linkedIn = param.value.linkedIn;
    console.log(userForm);
    try {
      if (param.status === 'VALID') {
        Utils.blockPage();
        const response = this.authService.userCreate(userForm) as any;
        // if (response.Success === true) {
        //   this.router.navigate(['/']);
        //   this.toastr.success('User Registered Successfully');
        // }
        Utils.unblockPage();
      } else {
        this.toastr.error('Invalid Fields');
      }
    } catch (error) {
      this.toastr.error('Please Try Again Later');
    }


  }

}
