import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule',
      },
      {
        path: 'agents',
        loadChildren: './agents/agents.module#AgentsModule',
      },
      {
        path: 'property',
        loadChildren: './property/property.module#PropertyModule',
      },
      {
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule',
      },
      {
        path: 'messages',
        loadChildren: './messages/messages.module#MessagesModule',
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
      }
    ]
  }
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
