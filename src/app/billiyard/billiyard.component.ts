import { Component, OnInit, Output, Input, EventEmitter, Directive } from '@angular/core';
import { Result } from '../model/result.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-billiyard',
  templateUrl: './billiyard.component.html',
  styleUrls: ['./billiyard.component.css']
})
@Directive({selector:'app-billiyard'})
export class BilliyardComponent implements OnInit {

  @Output() submitData = new EventEmitter<Result>();
  @Input() href:string;
  @Input() datas:Result[];
  @Input() uId:string;

  hours = [];
  minutes = [];
  tables = [1,2,3,4,5];
  hour = 12;
  minute = 60;
  result:Result = new Result();
  newNum:string;
  hidden = false;
  listIndex:number;
  
  dataResult:Result[];

  constructor(private router:Router) {}
  
  ngOnInit() {
    this.result.tableNum = this.uId;
    this.result.submitFlag = false;
    this.result.day = 'AM';

   this.hours = Array.from({length:this.hour}, (v, k)=> this.makeTwoDigit(k+1));
   this.minutes = Array.from({length:this.minute},(v, k)=>this.makeTwoDigit(k));

      this.result.hour = this.hours[0];
      this.result.minute = this.minutes[0];

  }

  makeTwoDigit(num):String{

    let tempNum = '0'+num;
    return  this.newNum=tempNum.slice(-2);
  }


  submit(param){
    
    this.result.submitFlag = !param;

    if(this.result.guestName === undefined || this.result.guestName === ""){
      this.result.guestName = "Guest";
    }
    this.sendData();

  }


  exitGuest(param){
    this.result.submitFlag = !param;
    this.result.guestName = "";
  }

  sendData(){

    this.result.awaiterLists.splice(this.listIndex, 1);
    this.submitData.emit(this.result);
    console.log(this.result);
  
  }

  onChange(param){
    this.result.guestName = this.result.awaiterLists[param];
    this.listIndex = param;
  }

}