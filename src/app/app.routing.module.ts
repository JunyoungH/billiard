import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TimeInsertComponent } from './time-insert/time-insert.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MainRoutingComponent } from './main-routing/main-routing.component';

const routes: Routes = [
  {path:'', component:MainRoutingComponent},
  {path: 'admin', component: TimeInsertComponent},
  {path: 'guest', component: TimeInsertComponent},
  {path: 'edit', component: MenuEditComponent},
  {path: '**', component: MainRoutingComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
