import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsComponent } from './agents.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FinderComponent } from './finder/finder.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RatingModule } from 'ng-starrating';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: AgentsComponent,
    children: [
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'finder',
        component: FinderComponent
      }
    ]
  }
];


@NgModule({
  declarations: [AgentsComponent, DetailsComponent, FinderComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    RatingModule,
    RouterModule.forChild(routes)
  ]
})
export class AgentsModule { }
