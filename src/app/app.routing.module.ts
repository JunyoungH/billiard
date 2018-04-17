import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TimeInsertComponent } from './time-insert/time-insert.component';
import { MainRoutingComponent } from './main-routing/main-routing.component';

const routes: Routes = [
  {path:'', component:MainRoutingComponent},
  {path: 'admin', component: TimeInsertComponent},
  {path: 'guest', component: TimeInsertComponent},
  {path: '**', component: MainRoutingComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
