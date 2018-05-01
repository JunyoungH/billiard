import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { FileUploadService } from '../service/file-upload.service';
import { FileUpload } from '../model/fileUpload.model';

@Component({
  selector: 'app-menu',
  template: `
            <div class="menu-left" uk-slideshow="animation: fade; autoplay:true;">
                <ul class="uk-slideshow-items">
                    <li *ngFor="let menuImage of menuImgageStored" style="background:#fafbfb">
                        <img src="http://localhost:8080/fileupload/{{menuImage.imageName}}" alt=""> 
                    </li>
                    
                </ul>
                <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
            </div>
            `,
  styleUrls: ['./menu-edit.component.css']
})
export class MenuComponent implements OnInit {
    @Input() id:string;

    menuImgageStored = [];

  constructor(private fileUploadService:FileUploadService) {}


ngOnInit() {

    this.fileUploadService.getImageToMenu(this.id).subscribe((result:any)=>{
        this.menuImgageStored = result; 
        console.log(this.id);
        console.log(result);
    });
   
}

  setMenuImage(){
    this.ngOnInit();
  }
}
