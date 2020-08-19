import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxUsersComponent } from './feature-ngrx/ngrx-users/ngrx-users.component';
import { NgxsUsersComponent } from './feature-ngxs/ngxs-users/ngxs-users.component';

const routes: Routes = [
  { path: 'ngrx', component: NgrxUsersComponent },
  { path: 'ngxs', component: NgxsUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
