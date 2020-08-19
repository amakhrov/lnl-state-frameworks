import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent as NgrxUsersComponent } from './feature-ngrx/users/users.component';

const routes: Routes = [{ path: 'ngrx', component: NgrxUsersComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
