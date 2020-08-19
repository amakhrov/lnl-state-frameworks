import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsUsersComponent } from './ngxs-users/ngxs-users.component';
import { UserUiModule } from '../shared/user-ui/user-ui.module';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './store/users.state';

@NgModule({
  declarations: [NgxsUsersComponent],
  imports: [CommonModule, UserUiModule, NgxsModule.forFeature([UsersState])],
})
export class FeatureNgxsModule {}
