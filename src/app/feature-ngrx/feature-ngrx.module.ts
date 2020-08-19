import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxUsersComponent } from './ngrx-users/ngrx-users.component';
import { UserUiModule } from '../shared/user-ui/user-ui.module';
import { Store, StoreModule } from '@ngrx/store';
import { ngrxStoreKey } from './store/users.constants';
import { reducer } from './store/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';

@NgModule({
  declarations: [NgrxUsersComponent],
  imports: [
    CommonModule,
    UserUiModule,
    StoreModule.forFeature(ngrxStoreKey, reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class FeatureNgrxModule {}
