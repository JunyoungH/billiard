import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { FileUploadService } from '../service/file-upload.service';
import { FileUpload } from '../model/fileUpload.model';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  @ViewChildren(MenuComponent) menuComponent:QueryList<MenuComponent>;  

  eventTarget:any;
  imageList:Element;
  imageListChild:any;
  imageAddButton:Element;
  imageBox:any;
  input:HTMLInputElement;
  imagePreview:any;
  imagePreviewId:string;
  fileUpload = new FileUpload();
  left:string = 'left';
  right:string = 'right';

  imageStored:any;
  menuImgageStored:any;
  

  constructor(private fileUploadService:FileUploadService) {}


ngOnInit() {

    this.imageList = document.querySelector('.image-list');
    this.imageAddButton = document.querySelector('.image-add');

    this.input = document.querySelector('input[type="file"]') as HTMLInputElement;
    this.imagePreview = document.querySelectorAll('.menu');
    
    this.fileUploadService.getAll().subscribe(result=>{
      this.imageStored=result;
      this.imageListChild = this.imageList.children;
      
    
    });
    
    Observable.fromEvent(this.imageList, 'dragover').subscribe((event:any)=>{ 
      event.preventDefault();
      event.stopPropagation();

      this.imageList.classList.add('dragged');
      if(event.target.classList[0]!=='image-list'){
        event.target.classList.add('disableEvent');
      }
      
    });

    Observable.fromEvent(this.imageList, 'dragleave').subscribe((event:any)=>{
      event.preventDefault();
      event.stopPropagation();

      this.imageList.classList.remove('dragged');
      
      console.log(event.target.classList[0]);
      if(event.target.classList[0]==='image-list'){
      Array.from(this.imageListChild,(value:any,key)=>  value.classList.remove('disableEvent'));
      }
    });


    Observable.fromEvent(this.imageAddButton, 'mouseover').subscribe((event:any)=>{
      event.preventDefault();
      
      this.imageAddButton.classList.add('dragged');
      
     
    });

    Observable.fromEvent(this.imageAddButton, 'mouseleave').subscribe((event:any)=>{
      event.preventDefault();
      this.imageAddButton.classList.remove('dragged');
    });

    Observable.fromEvent(this.imageList, 'drop').subscribe((event:any)=>{
      event.stopPropagation();
      event.preventDefault();

      this.imageList.classList.remove('dragged');
      this.eventTarget = event.target;

      this.previewImage(event);
    });

    Observable.fromEvent(this.imageAddButton, 'click').subscribe((event:any)=>{
      event.preventDefault();
      this.input.click();
    });

    Observable.fromEvent(this.input, 'change').subscribe((event:any)=>{
      event.preventDefault();
      this.previewImage(event);
    });

    Observable.fromEvent(this.imagePreview, 'click').subscribe((event:any)=>{
   
      console.log(event.currentTarget.id);
      this.imagePreviewId = event.currentTarget.id;
      this.imageBox = document.querySelectorAll('.image-box');
      
      Array.from(this.imagePreview, (value:any, key)=>value.classList.remove('clicked'));
      event.currentTarget.classList.add('clicked');

      console.log(this.imageBox);

      this.setCheckValue();

    });

  }

  previewImage(event){
    let file = event.dataTransfer?event.dataTransfer.files[0]:event.target.files[0];
    this.fileUploadService.save(file).subscribe(
      result => this.imageStored = result,
      error => console.log(error)
    );
    
  }

  addImage(event){
    event.preventDefault();
    let target = event.currentTarget;
    if(this.imagePreviewId){
      if(target.querySelector('img').id === this.imagePreviewId){
        this.fileUpload.imageGroup = null;
      }else{
        this.fileUpload.imageGroup = this.imagePreviewId;
      }
      this.fileUpload.id = target.id;
     
      target.querySelector('img').id = this.fileUpload.imageGroup;

      this.fileUploadService.addImageToMenu(this.fileUpload).subscribe(
        result=> this.menuComponent.forEach(value=>value.setMenuImage()),
        error=>console.log(error)
    );

        this.setCheckValue();
    }

  }

  setCheckValue(){
    Array.from(this.imageBox, 
      (value:any, key)=> value.querySelector('img').id===this.imagePreviewId?
                          value.classList.add('clicked'):value.classList.remove('clicked'));
  }
  
  showDeleteBox(event){
    event.preventDefault();
    event.currentTarget.querySelector('.remove-box').hidden = false;
  }

  hideDeleteBox(event){
    event.preventDefault();
    event.currentTarget.querySelector('.remove-box').hidden = true;
  }

  deleteImage(imageId){
    console.log(imageId);
    this.fileUploadService.deleteImage(imageId).subscribe(()=>{
      document.getElementById(imageId).hidden = true;
      this.menuComponent.forEach(value=>value.setMenuImage());
    });
   
  }

}
