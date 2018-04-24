import { Component, OnInit } from '@angular/core';
import { BilliyardGuestComponent } from '../billiyard-guest/billiyard-guest.component';
import { QueListComponent } from '../que-list/que-list.component';
import { Observable } from 'rxjs/rx';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  constructor() { }
  eventTarget:any;
  imageList:Element;
  input:HTMLInputElement;

  ngOnInit() {

    this.imageList = document.querySelector('.image-list');
    this.input = document.querySelector('input[type="file"]') as HTMLInputElement;

    let dragover$ = Observable.fromEvent(this.imageList, 'dragover');
    let dragleave$ = Observable.fromEvent(this.imageList, 'dragleave');
    let mouseover$ = Observable.fromEvent(this.imageList, 'mouseover');
    let mouseleave$ = Observable.fromEvent(this.imageList, 'mouseleave');

    Observable.merge(dragover$, mouseover$).subscribe((event:any)=>{
      event.preventDefault();
    
    });

    Observable.merge(dragleave$, mouseleave$).subscribe((event:any)=>{
      event.preventDefault();
    });

    Observable.fromEvent(this.imageList, 'drop').subscribe((event:any)=>{
      event.stopPropagation();
      event.preventDefault();
      this.eventTarget = event.target;
      console.log("target:"+event.target);
      console.log("image:"+event.dataTransfer.files[0]);
      this.previewImage(event);
    });

    Observable.fromEvent(this.imageList, 'click').subscribe((event:any)=>{
      event.preventDefault();
      this.input.click();
    });

    Observable.fromEvent(this.input, 'change').subscribe((event:any)=>{
      event.preventDefault();
      this.previewImage(event);
    });

  }

  previewImage(event){
    let file = event.dataTransfer?event.dataTransfer.files[0]:event.target.files[0];
    let divNode = document.createElement('div');
    let imgNode = document.createElement('img');
    divNode.classList.add('image-frame');
    divNode.appendChild(imgNode);
    divNode.style.cssText='width: 100px; height: 100px; display: flex; flex-direction: column;' 
    +'justify-content: center; border: white 0.1em solid; padding: 0; overflow:hidden';

    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file); 
    console.log(reader);
    reader.onload = ()=>{
      this.imageList.appendChild(divNode);
      imgNode.src = reader.result;
    };
    
  }

}
