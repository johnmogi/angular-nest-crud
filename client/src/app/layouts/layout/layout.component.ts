import { Component, OnInit } from '@angular/core';
import { Lead } from 'src/app/Lead';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  lead:Lead={}
  constructor() { }
  onFormComplete(event:Event){
    this.lead.name = (<HTMLInputElement>event.target).value
    console.log(this.lead.name);
    
  }
  ngOnInit(): void {
  }

}
