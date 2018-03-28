import { Component, OnInit, ViewChildren, QueryList, ViewChild} from '@angular/core';
import { BilliyardComponent } from '../billiyard/billiyard.component';
import { BilliyardGuestComponent } from '../billiyard-guest/billiyard-guest.component';
import { QueListComponent } from '../que-list/que-list.component'; 
import { MainService } from '../main.service';
 
import { Router } from '@angular/router';
import { Result } from '../model/result.model';
import * as Stomp from 'stompjs';
import * as Sockjs from 'sockjs-client';
import { JsonPipe } from '@angular/common';
import { element, by } from 'protractor';

@Component({
  selector: 'app-time-insert',
  templateUrl: './time-insert.component.html',
  styleUrls: ['./time-insert.component.css']
})
export class TimeInsertComponent implements OnInit {

  @ViewChildren(BilliyardGuestComponent) guest:QueryList<BilliyardGuestComponent>;
  @ViewChildren(BilliyardComponent) adminComopnent:QueryList<BilliyardComponent>;
  @ViewChild(QueListComponent) queList:QueListComponent;

  result:Result = new Result();
  
  ws:any;

  href:string;
  table:string;

  numbers:any;

  constructor(private router:Router, private mainService:MainService){}
  
  ngOnInit(){

    this.numbers = Array(5).fill(0).map((x,i)=>i+1);
    this.href = this.router.url.substring(1);

    console.log("href is "+ this.href);

    let socket = new Sockjs("http://localhost:8080/greeting");
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({},(frame)=>{
      that.ws.subscribe("/errors", (message)=>{
        alert("Error"+message.body);
      });
      that.ws.subscribe("/topic/reply", message=>{
        
        that.showGreeting(JSON.parse(message.body));
        
      });
    }, (error)=>{
      alert("STOMP error"+error);
    });
  }

  // disconnect(){
  //   if(this.ws != null){
  //     this.ws.ws.close();
  //   }
  //   this.setConnected(false);
  //   console.log("Disconnected");
  // }


  ngAfterViewInit(){
    this.mainService.setShowMenu(false);
  }

  sendName(result){
    
    let data = JSON.stringify(result);
  
    this.ws.send("/app/message", {}, data);
    console.log(data);
  }

  showGreeting(message){
    this.adminComopnent.forEach(data => data.result.awaiterLists = message.awaiterLists);
    this.queList.result.awaiterLists = message.awaiterLists;

    let guestComponent = this.guest.find( data => data.uId == message.tableNum);

      guestComponent.receiveData(message);
 
  }


}
