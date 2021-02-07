import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule } from 'ngx-toastr';
import { RatingModule } from 'ng-starrating';
import { AppComponent } from './app.component';
import { ShareButtonsModule } from '@ngx-share/buttons';
import * as moment from 'moment';
import { PusherService } from './service/pusher.service';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: './main/main.module#MainModule',
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RatingModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    HttpClientModule,
    NgxDropzoneModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDG7NL65AhuJSZ9JXzvt6zLrlqldvYrlY'
    })
  ],
  providers: [
    { provide: 'moment', useValue: moment },
    PusherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
