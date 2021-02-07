import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.css']
})
export class RequestPasswordComponent implements OnInit {
  public response: any;

  constructor(
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  requestForm(param) {
    console.log('param', param);

    this.authService.requestPassword(param).subscribe(data => {
      this.response = data;
      console.log(data);
      if (this.response.Success === true) {
        this.toastr.success('Please Check Email Address!');
        this.router.navigate(['/']);
      } else {
        this.toastr.error(this.response.message);
      }
    }, (error: any) => {
      this.toastr.error(error);
      console.log('error');
    });


  }

}
