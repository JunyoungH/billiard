import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TimeInsertComponent } from './time-insert/time-insert.component';

const routes: Routes = [
  {path: 'admin', component: TimeInsertComponent},
  {path: 'guest', component: TimeInsertComponent}
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
