import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/service/agent.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Utils } from 'utils';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {
  title: string = 'Search Agents';
  public allAgents: any;
  public response: any;
  public respond: any;
  public p: any;
  public InitialSearch:boolean = false;


  titlee = 'Pusher Liker';
  likes: any =  10;

  constructor(
    private agentService: AgentService,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle( this.title );
   }

  ngOnInit() {
    // this.getAgent();
  }

  // getAgent() {
  //   this.agentService.getAllUsers().subscribe( data => {
  //     this.response = data;
  //     this.allAgents = this.response.users;
  //     console.log('agents', this.allAgents);
  //   });
  // }

  // viewDetails(userId) {
  //   this.router.navigate(['/agents/details/' + userId]);
  // }

  findAgents(param) {
    const LocationName = param.LocationName;
    const agentName = param.agentName;
    Utils.blockPage();
    this.agentService.SearchAgents(LocationName, agentName).subscribe(data => {
      Utils.unblockPage();
      this.InitialSearch = true;
      this.response = data;
      this.respond = this.response.Success;
      this.allAgents = this.response.users;
    });
  }

}
