import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { User } from '../../shared/user.api';
import { CreateUser, LoadUsers, RemoveUser } from '../store/users.actions';
import { UsersState, UsersStateShape } from '../store/users.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './ngxs-users.component.html',
  styleUrls: ['./ngxs-users.component.css'],
})
export class NgxsUsersComponent implements OnInit {
  @Select(UsersState) users$: Observable<UsersStateShape>;
  @Select(UsersState.usersCount) totalUsers$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadUsers());
  }

  create(name: string): void {
    this.store.dispatch(new CreateUser(name));
  }

  remove(user: User): void {
    this.store.dispatch(new RemoveUser(user.id));
  }
}
