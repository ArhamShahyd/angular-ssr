import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title, Meta } from '@angular/platform-browser';
import { Utils } from 'utils';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = 'About Swiftli';
  public response: any;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private toastr: ToastrService,
    private titleService: Title,
    private meta: Meta
  ) { 
    this.titleService.setTitle( this.title );
  }

  ngOnInit() {
  }


  aboutForm(param) {
    if (param.status === 'VALID') {
      Utils.blockPage();
      this.contactService.userComplaint(param.value).subscribe( data => {
        Utils.unblockPage();
        this.response = data;
        this.router.navigate(['/pages/success-page']);
      });
    } else {
      this.toastr.error('Invalid Fields');
    }
  }

}
