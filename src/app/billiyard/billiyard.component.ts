import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-billiyard',
  templateUrl: './billiyard.component.html',
  styleUrls: ['./billiyard.component.css']
})
export class BilliyardComponent implements OnInit {


  mins = [];
  secs = [];
  tables = [1,2,3,4,5];


  min = 12;
  sec = 60;

  newNum:String;
  mBind:String;
  sBind:String;
  dBind = 'AM';

  hidden = false;

  constructor() { }

  ngOnInit() {

    for(let i=0; i<this.min; i++)
      this.mins[i] = this.makeTwoDigit(i+1);
    
    for(let i=0; i<this.sec; i++)
      this.secs[i] = this.makeTwoDigit(i);

      this.mBind = this.mins[0];
      this.sBind = this.secs[0];

  }

  makeTwoDigit(num):String{

    let tempNum = '0'+num;
    return  this.newNum=tempNum.slice(-2);
  }


  toggleHidden(param){
    
    this.hidden = !param;
  }

}
