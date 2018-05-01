import { Component, OnInit, Output, Input, EventEmitter, Directive, AfterViewChecked, AfterContentChecked, DoCheck, AfterContentInit } from '@angular/core';
import { Result } from '../model/result.model';
import { Router } from '@angular/router';
import { hideShowAnimation } from '../animations/hide-show';


@Component({
  selector: 'app-billiyard',
  templateUrl: './billiyard.component.html',
  styleUrls: ['./billiyard.component.css'],
  animations: [hideShowAnimation]
})
export class BilliyardComponent implements OnInit {

  @Output() submitData = new EventEmitter<Result>();
  @Input() href:string;
  @Input() datas:Result[];
  @Input() uId:string;

  hours = [];
  minutes = [];
  tables = [1,2,3,4,5];
  result:Result = new Result();
  newNum:string;
  hidden = false;
  auto = true;

  listIndex:number;
  
  dataResult:Result[];

  constructor(private router:Router) {}
  
  ngOnInit() {
    this.result.tableNum = this.uId;
    this.result.submitFlag = false;
    this.result.day = 'AM';

    this.hours = Array.from({length:12}, (v, k)=> this.makeTwoDigit(k+1));
    this.minutes = Array.from({length:60},(v, k)=>this.makeTwoDigit(k));

    this.result.hour = this.hours[0];
    this.result.minute = this.minutes[0];

    if(localStorage.getItem("table"+this.uId)){
      console.log(localStorage.getItem("table"+this.uId));
      this.result = JSON.parse(localStorage.getItem("table"+this.uId));
    }

    if(localStorage.getItem("queList")){
      this.result.awaiterLists = JSON.parse(localStorage.getItem("queList"));
    }
  }

  makeTwoDigit(num):String{

    let tempNum = '0'+num;
    return  this.newNum=tempNum.slice(-2);
  }

  submit(flag, type){
    
    this.result.submitFlag = !flag;

    if(!this.result.guestName){
      this.result.guestName = "Guest";
    }
    if(type){
      this.getCurrentTime();
    }

    localStorage.setItem("table"+this.uId, JSON.stringify(this.result));
    this.sendData();

  }

  exitGuest(param){
    this.result.submitFlag = !param;
    this.result.guestName = "";
    localStorage.removeItem("table"+this.uId);
    this.submitData.emit(this.result);
  }

  sendData(){ 
    if(this.result.guestName!=="Guest"){
      this.result.awaiterLists.splice(this.listIndex, 1);
    }
    
    this.submitData.emit(this.result);
  }

  onChange(param){
    this.result.guestName = this.result.awaiterLists[param];
    this.listIndex = param;
  }

  getCurrentTime(){
    let currentTime = new Date();
    let tempHour = currentTime.getHours();
    console.log(tempHour);
    if(tempHour>12){
      this.result.hour = this.makeTwoDigit((tempHour-12).toString()).toString()
      this.result.day = 'PM';
    }else{
      this.result.hour = tempHour===0?(12).toString():this.makeTwoDigit(tempHour).toString();
      this.result.day = 'AM';
    }
    
    this.result.minute = this.makeTwoDigit(currentTime.getMinutes()).toString();
    
  }

}
