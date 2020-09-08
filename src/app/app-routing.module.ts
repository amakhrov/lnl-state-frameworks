import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxUsersComponent } from './feature-ngrx/ngrx-users/ngrx-users.component';
import { NgxsUsersComponent } from './feature-ngxs/ngxs-users/ngxs-users.component';
import { MobxUsersComponent } from './feature-mobx/mobx-users/mobx-users.component';
import { PlainUsersComponent } from './feature-plain/plain-users/plain-users.component';

const routes: Routes = [
  { path: 'ngrx', component: NgrxUsersComponent },
  { path: 'ngxs', component: NgxsUsersComponent },
  { path: 'plain', component: PlainUsersComponent },
  { path: 'mobx', component: MobxUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
