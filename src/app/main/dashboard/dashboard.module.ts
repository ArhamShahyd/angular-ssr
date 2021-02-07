import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ManagePropertyComponent } from './manage-property/manage-property.component';
import { ActiveLeadsComponent } from './active-leads/active-leads.component';
import { ExpiredLeadsComponent } from './expired-leads/expired-leads.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MembershipComponent } from './membership/membership.component';
import { LeadsRequestComponent } from './leads-request/leads-request.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'manage-property',
        component: ManagePropertyComponent
      },
      {
        path: 'lead-request',
        component: LeadsRequestComponent
      },
      {
        path: 'active-leads',
        component: ActiveLeadsComponent
      },
      {
        path: 'expired-leads',
        component: ExpiredLeadsComponent
      },
      {
        path: 'review',
        component: ReviewsComponent
      },
      {
        path: 'membership',
        component: MembershipComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent, 
    ProfileComponent,
    ManagePropertyComponent,
    ActiveLeadsComponent,
    ExpiredLeadsComponent,
    ReviewsComponent,
    MembershipComponent,
    LeadsRequestComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    RatingModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
