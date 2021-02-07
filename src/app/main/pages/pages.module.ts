import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FormsModule } from '@angular/forms';
import { SuccessPageComponent } from './success-page/success-page.component';
import { PointsSystemComponent } from './points-system/points-system.component';
import { AgmCoreModule } from '@agm/core';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent
      },
      {
        path: 'success-page',
        component: SuccessPageComponent
      },
      {
        path: 'isVerified/:id',
        component: EmailComponent
      },
      {
        path: 'points-system',
        component: PointsSystemComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    PagesComponent,
    TermsAndConditionsComponent,
    SuccessPageComponent,
    PointsSystemComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDG7NL65AhuJSZ9JXzvt6zLrlqldvYrlY'
    }),
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
