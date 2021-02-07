import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindComponent } from './find/find.component';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './property.component';
import { PostingComponent } from './posting/posting.component';
import { DetailsComponent } from './details/details.component';
import { ManageComponent } from './manage/manage.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
  {
    path: '',
    component: PropertyComponent,
    children: [
      {
        path: 'find',
        component: FindComponent
      },
      {
        path: 'posting',
        component: PostingComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'manage',
        component: ManageComponent
      }
    ]
  }
];


@NgModule({
  declarations: [FindComponent, PropertyComponent, PostingComponent, DetailsComponent, ManageComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxDropzoneModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDG7NL65AhuJSZ9JXzvt6zLrlqldvYrlY'
    }),
    ShareButtonsModule.withConfig({
      debug: true
    }),
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ]
})
export class PropertyModule { }
