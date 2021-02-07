import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Utils } from 'utils';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title: string = 'Dashboard - Profile';
  public profileResponse: any;
  public profileDetails: any = {};
  public brokerDetails: any = {};
  public userId: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private authService: AuthenticationService,
  ) {
    this.titleService.setTitle( this.title );
    this.userId = localStorage.getItem('user_Id');
   }

  ngOnInit() {
    this.getUserProfile();
  }

  contactForm(val) {
    console.log('val', val);
  }

  getUserProfile() {
    Utils.blockPage();
    this.authService.getUserById(this.userId).subscribe( data => {
      Utils.unblockPage();
      this.profileResponse = data;
      this.profileDetails = this.profileResponse.Users[0];
      this.brokerDetails = this.profileDetails.company;
    });
  }

}
