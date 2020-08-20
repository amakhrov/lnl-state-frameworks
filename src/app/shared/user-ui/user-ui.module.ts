import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  declarations: [UserComponent, CreateNewComponent, TotalComponent],
  exports: [UserComponent, CreateNewComponent, TotalComponent],
  imports: [CommonModule],
})
export class UserUiModule {}
