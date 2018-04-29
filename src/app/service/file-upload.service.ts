import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUpload } from '../model/fileUpload.model';

@Injectable()
export class FileUploadService {

  constructor(private http:HttpClient){}

  api = 'http://localhost:8080/api/';


  public save(file:File){
    let formData = new FormData();
    formData.append('imageFile', file);
    return this.http.post(`${this.api}/save`,formData);
  }

  public getAll(){
    return this.http.get(`${this.api}/get`);
  }

  public addImageToMenu(fileUpload:FileUpload){
    return this.http.post(`${this.api}/addImageToMenu`, fileUpload);
  }

  public getImageToMenu(imageGroup:string){
    return this.http.get(`${this.api}/getImageToMenu/${imageGroup}`);
  }

}
