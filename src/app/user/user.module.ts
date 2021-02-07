import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { MembershipComponent } from './membership/membership.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RatingModule } from 'ng-starrating';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent
      },
      {
        path: 'reset-password/:id',
        component: ResetPasswordComponent
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
    UserComponent,
    RegisterComponent,
    RequestPasswordComponent,
    MembershipComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    NgxPaginationModule,
    FormsModule,
    RatingModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
