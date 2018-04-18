import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../animations/fade-in';


@Component({
  selector: 'app-main-routing',
  templateUrl: './main-routing.component.html',
  styleUrls: ['./main-routing.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]':''}
})
export class MainRoutingComponent implements OnInit {

  ip:string;
  hidden:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {

  }

}
