import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.api';
import { UsersStore } from '../users.store';
import { toJS } from 'mobx';

@Component({
  selector: 'app-users',
  templateUrl: './mobx-users.component.html',
  styleUrls: ['./mobx-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobxUsersComponent implements OnInit {
  constructor(public usersStore: UsersStore) {}

  // toJS = toJS;

  ngOnInit(): void {
    this.usersStore.loadUsers().subscribe();
  }

  create(name: string): void {
    this.usersStore.createUser(name).subscribe();
  }

  remove(user: User): void {
    this.usersStore.removeUser(user.id).subscribe();
  }

  cd(): void {
    console.log('container rendering');
  }
}
