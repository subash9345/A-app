import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  subash='subash';
  Sname=" ";
  serverCreate=false;
  onCreation="no server created";
  // servers=['tserver','Tserver2'];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }
onServer(){
  this.serverCreate=true;
  // this.servers.push(this.subash);
  this.onCreation="server was created";
}
onReset(){
  this.Sname=" ";
}
}
