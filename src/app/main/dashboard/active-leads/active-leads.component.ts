import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/service/agent.service';
import { Meta, Title } from '@angular/platform-browser';
import { Utils } from 'utils';

@Component({
  selector: 'app-active-leads',
  templateUrl: './active-leads.component.html',
  styleUrls: ['./active-leads.component.css']
})
export class ActiveLeadsComponent implements OnInit {
  title: string = 'Active Leads';
  public userId: any;
  public p: any;
  public getActive: any;
  public activeLeads: any;

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
    const status = 1;
    this.agentService.getExpiredLeads(this.userId, status).subscribe( data => {
      Utils.unblockPage();
      this.getActive = data;
      this.activeLeads = this.getActive.leads;
    });
  }

}
