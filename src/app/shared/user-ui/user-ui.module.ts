import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { CreateNewComponent } from './create-new/create-new.component';

@NgModule({
  declarations: [UserComponent, CreateNewComponent],
  exports: [UserComponent, CreateNewComponent],
  imports: [CommonModule],
})
export class UserUiModule {}
