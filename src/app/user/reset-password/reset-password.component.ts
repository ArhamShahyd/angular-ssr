import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public tokenId: any;
  public resetRes: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.tokenId = routeParams.id;
    });
  }

  resetForm(param) {
    console.log('param', param);
    const resetForm: any = {};
    resetForm.password = param.password;
    resetForm.token = this.tokenId;
    this.authService.resetPassword(resetForm).subscribe(data => {
      console.log('response', data);
      this.resetRes = data;
      if (this.resetRes.Success === 'true') {
        this.toastr.success(this.resetRes.message);
        this.router.navigate(['/']);
      } else {
        this.toastr.error(this.resetRes.message);
      }

    });

  }

}
