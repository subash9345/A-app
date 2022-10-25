import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pets:string="";
  subash = [{
    name: "karthick",
    id: 101,
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOx_x34eMOlLMI_PI-Z75Cb8pgFYonXWRuOY6WgERLHH6wc_mldQzZR8_VhBCHLhUaC4&usqp=CAU"
  }, {
    name: "subash",
    id: 102,
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMlYLLOfU_qAlOF4rz_YFbXVRK-6V4w7KTfrWipV59OPmGMYCxsjfFLXM9rg-nMsixA8&usqp=CAU"
  }]

}
