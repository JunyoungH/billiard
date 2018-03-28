import { Component, OnInit, Output, Input, Directive} from '@angular/core';
import { Result } from '../model/result.model';

var id = 0;

@Component({
  selector: 'app-billiyard-guest',
  templateUrl: './billiyard-guest.component.html',
  styleUrls: ['./billiyard-guest.component.css'],
})
@Directive({selector: 'app-billiyard-guest'})
export class BilliyardGuestComponent{

  public uId = ++id;

  
  result:Result = new Result();
  numbers:number[];

  hidden = false;

  constructor() {
    this.numbers = Array(5).fill(0).map((x,i)=>i+1);
   }

   ngOnInit(){
     
   }

  receiveData(message){

    this.result = message;

    if(this.result.guestName === undefined || this.result.guestName === ""){
      this.result.guestName = "Guest";
    }

    let start = document.querySelector(".start"+this.uId) as HTMLElement;
    let ready = document.querySelector(".ready"+this.uId) as HTMLElement;
    start.hidden = !this.result.submitFlag;
    ready.hidden = this.result.submitFlag;
  }
  

}
