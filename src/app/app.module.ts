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
import { MainRoutingComponent } from './main-routing/main-routing.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    BilliyardComponent,
    TimeInsertComponent,
    BilliyardGuestComponent,
    QueListComponent,
    MainRoutingComponent,
    MenuEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
