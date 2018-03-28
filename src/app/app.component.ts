import { Component, OnInit } from '@angular/core';
import { BilliyardComponent } from './billiyard/billiyard.component';
import { TimeInsertComponent } from './time-insert/time-insert.component';

import { Route, Router } from '@angular/router';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { MainService } from './main.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('enterRomm', [
      state('active', style({
        transform: 'translateY(-100vh)',
        height: '0'
        
      })),
        transition('inactive => active', animate(400, style({
          transform: 'translateY(-100vh)',
          height: '0'
        })))
    ])
  ]
})
export class AppComponent {
  showMenu: BehaviorSubject<boolean>;

  public state:string = 'inactive'
  public href:string;

  constructor(private router:Router, private mainService:MainService){
    this.href = this.router.url.substring(1);

  }

  ngOnInit(){
    this.showMenu = this.mainService.getShowMenu();
  }

  toggleState(){
    this.state = this.state === 'active'? 'inactive' : 'active';
  }
  
}

