import { Component, OnInit } from '@angular/core';
import { BilliyardComponent } from './billiyard/billiyard.component';
import { TimeInsertComponent } from './time-insert/time-insert.component';

import { Route, Router } from '@angular/router';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMenu: BehaviorSubject<boolean>;

  constructor(private router:Router){}

  ngOnInit(){}
  
}

