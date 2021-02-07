import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title, Meta } from '@angular/platform-browser';
import { Utils } from 'utils';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'Contact Us';
  public response: any;
  public latitude: number = 43.642934;
  public longitude: number = -79.424494;
  public zoom: number = 15;

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
    window.scroll(0, 0);
  }


  contactForm(contactForm) {
    if (contactForm.status === 'VALID') {
      Utils.blockPage();
      this.contactService.userComplaint(contactForm.value).subscribe(data => {
        Utils.unblockPage();
        this.response = data;
        this.router.navigate(['/pages/success-page']);
      });
    } else {
      this.toastr.error('Invalid Fields');
    }


  }


}
