import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Utils } from 'utils';
declare const $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public role: any;
  public user_role: any;
  public user: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.role = localStorage.getItem('token');
    this.user_role = localStorage.getItem('user_type');
  }

  getRegistered(param) {
    if (param.form.status === 'INVALID') {
      return false;
    } else {
      localStorage.setItem('registerUser', JSON.stringify(param.value));
      $('#modalSignup').modal('hide');
      this.router.navigate(['/user/register']);
    }
  }


  getLogin(param) {
    if (param.status == 'VALID') {
      Utils.blockPage();
      this.authService.login(param.value).subscribe( data => {
      this.user = data;
      Utils.unblockPage();
      if(this.user.Success == true) {
        localStorage.setItem('token', this.user.token);
        localStorage.setItem('user_Id', this.user.user._id);
        localStorage.setItem('user_type', this.user.user.userType);
        $('#modalLogin').modal('hide');
        this.toastr.success('Login Successfully');
        this.router.navigate(['/']);
        this.ngOnInit();
      } else {
        this.toastr.error(this.user.message);
        return false;
      }
    });
   } else {
    this.toastr.error('Invalid Fields');
   }
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.ngOnInit();
  }


  submitProperty(param) {
    $('#propertyModal').modal('hide');
    localStorage.setItem('propertyUserType', param);
  }

  modalRegister() {
    $('#modalLogin').modal('hide');
    $('#modalSignup').modal('show');
  }

  modalLogin() {
    $('#modalSignup').modal('hide');
    $('#modalLogin').modal('show');
  }


  forgotPassword() {
    this.router.navigate(['/user/request-password']);
    $('#modalLogin').modal('hide');
  }

}
