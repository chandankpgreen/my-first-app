import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus : string = 'No Server was created';
  serverName: string = 'DemoServer';
  servers: string[] = ['server1','server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus =  'A server was created';
  }

  updateServer( event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
