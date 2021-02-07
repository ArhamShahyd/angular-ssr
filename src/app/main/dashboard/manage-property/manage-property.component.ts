import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Utils } from 'utils';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-property',
  templateUrl: './manage-property.component.html',
  styleUrls: ['./manage-property.component.css']
})
export class ManagePropertyComponent implements OnInit {
  title: string = 'Manage Properties';
  public userId: any;
  public p: any;
  public property: any;
  public userProperty: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private toastr: ToastrService,
    private authService: AuthenticationService
  ) {
    this.titleService.setTitle( this.title );
    this.userId = localStorage.getItem('user_Id');
   }

  ngOnInit() {
    this.UserProperty();
  }

  UserProperty() {
    Utils.blockPage();
    this.authService.getUserProperty(this.userId).subscribe(data => {
      Utils.unblockPage();
      this.property = data;
      this.userProperty = this.property.properties;
    })
  }


  deleteUserProperty(propertyId){
    Utils.blockPage();
    this.authService.deleteProperty(propertyId).subscribe(data => {
      Utils.unblockPage();
      this.toastr.success('Property Deleted Succesfully');
      this.UserProperty();
    })
  }

}
