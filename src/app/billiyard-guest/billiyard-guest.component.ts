import { Component, OnInit, Output, Input, Directive, AfterViewInit} from '@angular/core';
import { Result } from '../model/result.model';
import { hideShowAnimation } from '../animations/hide-show';

var id = 0;

@Component({
  selector: 'app-billiyard-guest',
  templateUrl: './billiyard-guest.component.html',
  styleUrls: ['./billiyard-guest.component.css'],
  animations: [hideShowAnimation]
})
export class BilliyardGuestComponent implements OnInit{

  @Input() uId;

  result:Result = new Result();
  hidden:boolean;

  constructor() {}

  ngOnInit(){
    console.log("table"+this.uId);
    console.log(localStorage.getItem("table"+this.uId));
   
    if(localStorage.getItem("table"+this.uId)){
      this.result = JSON.parse(localStorage.getItem("table"+this.uId));
      
      console.log(this.result.submitFlag);
      this.hidden = this.result.submitFlag;
   }
  }

  receiveData(message){

    this.result = message;
    localStorage.setItem("table"+this.result.tableNum, JSON.stringify(this.result));

    if(!this.result.guestName){
      this.result.guestName = "Guest";
    }

    this.hidden = this.result.submitFlag;

  }
}
