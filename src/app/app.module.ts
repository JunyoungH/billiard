import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BilliyardComponent } from './billiyard/billiyard.component';

import { TimeInsertComponent } from './time-insert/time-insert.component';
import { AppRoutingModule } from './app.routing.module';
import { BilliyardGuestComponent } from './billiyard-guest/billiyard-guest.component';
import { QueListComponent } from './que-list/que-list.component';

import { MainService } from './main.service';

@NgModule({
  declarations: [
    AppComponent,
    BilliyardComponent,
    TimeInsertComponent,
    BilliyardGuestComponent,
    QueListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
