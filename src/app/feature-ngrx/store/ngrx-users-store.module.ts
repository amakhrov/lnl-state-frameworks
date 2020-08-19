import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ngrxStoreKey } from './users.constants';
import { reducer } from './users.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(ngrxStoreKey, reducer),
    EffectsModule.forFeature([CrmConnectionEffects]),
  ],
})
export class NgrxUsersStoreModule {}
