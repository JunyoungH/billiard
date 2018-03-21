import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BilliyardComponent } from './billiyard/billiyard.component';
import { QueListComponent } from './que-list/que-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BilliyardComponent,
    QueListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
