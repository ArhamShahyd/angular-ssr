import { Component } from '@angular/core';
import { NavigationStart, Router, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { Utils } from 'utils';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {
    // if (window.location.pathname === '/') {
    //   router.navigate(['']);
    // }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        Utils.blockPage();
      } else if ((event instanceof NavigationEnd) || (event instanceof NavigationError) || (event instanceof NavigationCancel)) {
        const body = $('html, body');
        body.stop().animate({ scrollTop: 0 }, 500, 'swing', function() {
        });
        Utils.unblockPage();
      }
    });
  }


}
