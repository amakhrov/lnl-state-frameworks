import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxUsersComponent } from './mobx-users/mobx-users.component';
import { UserUiModule } from '../shared/user-ui/user-ui.module';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [MobxUsersComponent],
  imports: [CommonModule, UserUiModule, MobxAngularModule],
})
export class FeatureMobxModule {}
