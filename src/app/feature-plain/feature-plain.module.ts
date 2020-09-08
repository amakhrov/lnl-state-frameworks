import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlainUsersComponent } from './plain-users/plain-users.component';
import { UserUiModule } from '../shared/user-ui/user-ui.module';

@NgModule({
  declarations: [PlainUsersComponent],
  imports: [CommonModule, UserUiModule],
})
export class FeaturePlainModule {}
