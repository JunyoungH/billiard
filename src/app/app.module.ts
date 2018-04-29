import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BilliyardComponent } from './billiyard/billiyard.component';
import { TimeInsertComponent } from './time-insert/time-insert.component';
import { AppRoutingModule } from './app.routing.module';
import { BilliyardGuestComponent } from './billiyard-guest/billiyard-guest.component';
import { QueListComponent } from './que-list/que-list.component';
import { MainRoutingComponent } from './main-routing/main-routing.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuComponent } from './menu-edit/menu.component';

import { FileUploadService } from './service/file-upload.service';


@NgModule({
  declarations: [
    AppComponent,
    BilliyardComponent,
    TimeInsertComponent,
    BilliyardGuestComponent,
    QueListComponent,
    MainRoutingComponent,
    MenuEditComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
