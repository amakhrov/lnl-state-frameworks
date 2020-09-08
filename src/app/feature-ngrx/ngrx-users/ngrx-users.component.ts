import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsersCount, selectUsersStore } from '../store/users.selectors';
import { User } from '../../shared/user.api';
import {
  createUser,
  loadUsers,
  removeUser,
  renameAll,
} from '../store/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './ngrx-users.component.html',
  styleUrls: ['./ngrx-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxUsersComponent implements OnInit {
  users$ = this.store.select(selectUsersStore);

  totalUsers$ = this.store.select(selectUsersCount);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  create(name: string): void {
    this.store.dispatch(createUser({ name }));
  }

  renameAll(): void {
    this.store.dispatch(renameAll());
  }

  remove(user: User): void {
    this.store.dispatch(removeUser({ id: user.id }));
  }

  cd(): void {
    console.log('container rendered');
  }
}
