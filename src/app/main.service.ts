import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MainService {

  private showMenu:BehaviorSubject<boolean>;

  constructor() {
    this.showMenu = new BehaviorSubject(true);
  }

  getShowMenu(){
    return this.showMenu;
  }

  setShowMenu(bool){
    this.showMenu.next(bool);
  }
}