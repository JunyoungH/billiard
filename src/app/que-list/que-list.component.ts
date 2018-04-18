import { Component, OnInit, Directive, Input, EventEmitter, Output } from '@angular/core';
import { Result } from '../model/result.model';

@Component({
  selector: 'app-que-list',
  templateUrl: './que-list.component.html',
  styleUrls: ['./que-list.component.css']
})
export class QueListComponent implements OnInit {
  constructor() { }

  @Output() submitList = new EventEmitter<Result>();
  @Input() href:string;

  awaiter:string;
  result:Result = new Result();
  hidden:boolean = false;
  border:boolean = false;

  ngOnInit() {
    
    if(this.href == 'guest'){
      this.hidden =true;
    }

    if(localStorage.getItem("queList")){
      this.result.awaiterLists = JSON.parse(localStorage.getItem("queList"));
    }    
  }

  waitListSubmit(param){

    if(!param){
      console.log("empty");
      this.border = true;
    }else{
      this.border = false;
      this.result.awaiterLists.push(param);
      this.submitList.emit(this.result);
      this.awaiter = "";

    }
  }

  delist(deleteParam){
    this.result.awaiterLists.splice(deleteParam, 1);
    this.submitList.emit(this.result);
  }
}
