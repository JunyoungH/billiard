import { Component, OnInit, ViewChildren, QueryList, ViewChild, AfterViewInit, AfterViewChecked, AfterContentChecked} from '@angular/core';
import { BilliyardComponent } from '../billiyard/billiyard.component';
import { BilliyardGuestComponent } from '../billiyard-guest/billiyard-guest.component';
import { QueListComponent } from '../que-list/que-list.component'; 
 
import { Router } from '@angular/router';
import { Result } from '../model/result.model';
import * as Stomp from 'stompjs';
import * as Sockjs from 'sockjs-client';
import { JsonPipe } from '@angular/common';
import { element, by } from 'protractor';
import { fadeInAnimation } from '../animations/fade-in';

@Component({
  selector: 'app-time-insert',
  templateUrl: './time-insert.component.html',
  styleUrls: ['./time-insert.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]':''}
})
export class TimeInsertComponent implements OnInit{

  @ViewChildren(BilliyardGuestComponent) guest:QueryList<BilliyardGuestComponent>;
  @ViewChildren(BilliyardComponent) adminComponent:QueryList<BilliyardComponent>;
  @ViewChild(QueListComponent) queList:QueListComponent;

  result:Result = new Result();
  
  ws:any;

  href:string;
  table:string;

  numbers:any;

  slideHidden:boolean =false;
  hiddenCount:number = 0;

  server:string = "http://localhost:8080/socket/greeting";

  constructor(private router:Router){}
  
  ngOnInit(){

    this.numbers = Array(5).fill(0).map((x,i)=>i+1);
    this.href = this.router.url.substring(1);

    console.log("href is "+ this.href);
    console.log("Socket Ip is "+ localStorage.getItem("ip"));

    let socket = new Sockjs(this.server);
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({},(frame)=>{
      that.ws.subscribe("/errors", (message)=>{
        alert("Error"+message.body);
      });
      that.ws.subscribe("/topic/reply", message=>{
        this.result = JSON.parse(message.body);
        if(this.result.resetFlag){ 
        
          localStorage.clear();
          
          window.location.reload();
        }
       
      that.showGreeting(this.result);
        
      });
    }, (error)=>{
      alert("STOMP error"+error);
    });


  }

  // ngAfterViewInit(){
  //   this.adminComponent.forEach(data=>{
  //     if(data.result.submitFlag){
  //         this.slideHidden = true;
  //         alert(this.slideHidden);
  //     }    
  //   });
  //   alert(this.slideHidden);
  //   let slide =document.querySelector('.slide') as HTMLElement;
  //   slide.hidden = this.slideHidden;

  // }

  // disconnect(){
  //   if(this.ws != null){
  //     this.ws.ws.close();
  //   }
  //   this.setConnected(false);
  //   console.log("Disconnected");
  // }

  sendName(result){
  
    let data = JSON.stringify(result);
    this.ws.send("/app/message", {}, data);
    console.log("data:"+data);
    
  }

  showGreeting(message){

    this.adminComponent.forEach(data => {
      data.result.awaiterLists = message.awaiterLists;
      }
    );
    this.queList.result.awaiterLists = message.awaiterLists;
    localStorage.setItem("queList", JSON.stringify(this.queList.result.awaiterLists));
    let guestComponent = this.guest.find( data => data.uId == message.tableNum);
    guestComponent.receiveData(message);
  
  }

  reset(){
    this.result.resetFlag = true;
    this.sendName(this.result);
  }

  edit(){
    this.router.navigateByUrl('edit');
  }
}
