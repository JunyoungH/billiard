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

  hour:number;
  minute:number;
  hrDiff:number;
  minDiff:number;

  constructor() {}

  ngOnInit(){
    console.log("table"+this.uId);
    console.log(localStorage.getItem("table"+this.uId));
   
    if(localStorage.getItem("table"+this.uId)){
      this.result = JSON.parse(localStorage.getItem("table"+this.uId));
      this.getTimePlayed();
      setInterval(()=>{ this.getTimePlayed();}, 1000);
      console.log(this.result.submitFlag);
      this.hidden = this.result.submitFlag;
   }  
  }

  receiveData(message){

     this.result = message;
     this.getTimePlayed();
     setInterval(()=>{ this.getTimePlayed();}, 1000);

    localStorage.setItem("table"+this.result.tableNum, JSON.stringify(this.result));

    if(!this.result.guestName){
      this.result.guestName = "Guest";
    }

    this.hidden = this.result.submitFlag;

  }



  getTimePlayed(){
    let date = new Date();
    let currentHour = date.getHours();
    let currentMin = date.getMinutes();

    if(this.result.day === "PM"){
      this.hour = this.result.hour==="12"?12:this.hour = parseInt(this.result.hour) + 12;
    }else{
      this.hour = this.result.hour==="12"?0:this.hour = parseInt(this.result.hour);
    }

    this.minute = parseInt(this.result.minute);
    
    let hrToMil = this.hour * 3600000;
    let minToMil = this.minute * 60000;

    let totalMil = hrToMil + minToMil;

    let timeResult = date.getTime() - totalMil;
    date.setTime(timeResult);
    this.hrDiff = date.getHours();
    this.minDiff = date.getMinutes();

  }

}

