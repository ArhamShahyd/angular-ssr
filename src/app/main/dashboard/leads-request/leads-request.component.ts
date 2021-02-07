import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/service/agent.service';
import { Meta, Title } from '@angular/platform-browser';
import { Utils } from 'utils';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-leads-request',
  templateUrl: './leads-request.component.html',
  styleUrls: ['./leads-request.component.css']
})
export class LeadsRequestComponent implements OnInit {
  title: string = 'Leads Request';
  public userId: any;
  public p: any;
  public getLead: any;
  public requestLeads: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private toastr: ToastrService,
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
    const status = 2;
    this.agentService.getExpiredLeads(this.userId, status).subscribe( data => {
      Utils.unblockPage();
      this.getLead = data;
      this.requestLeads = this.getLead.leads;
    });
  }

  LeadStatusForm(id, status) {
    Utils.blockPage();
    const param: any = {};
    param.id = id;
    param.urlStatus = status;
    this.agentService.leadStatusAction(param).subscribe(data => {
      Utils.unblockPage();
      this.getLeads();
      this.toastr.success('Lead Action Done!');
    });
  }

}
