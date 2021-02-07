import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AgentService } from 'src/app/service/agent.service';
import { Utils } from 'utils';

@Component({
  selector: 'app-expired-leads',
  templateUrl: './expired-leads.component.html',
  styleUrls: ['./expired-leads.component.css']
})
export class ExpiredLeadsComponent implements OnInit {
  title: string = 'Expired Leads';
  public userId: any;
  public p: any;
  public getExpired: any;
  public expireLeads: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private agentService: AgentService
  ) {
    this.titleService.setTitle( this.title );
    this.userId = localStorage.getItem('user_Id');
   }

  ngOnInit() {
    this.getLeads();
  }

  getLeads() {
    Utils.blockPage();
    const status = 0;
    this.agentService.getExpiredLeads(this.userId, status).subscribe( data => {
      Utils.unblockPage();
      this.getExpired = data;
      this.expireLeads = this.getExpired.leads;
    });
  }

}
