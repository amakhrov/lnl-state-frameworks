import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.api';
import { UsersStore } from '../users.store';

@Component({
  selector: 'app-users',
  templateUrl: './plain-users.component.html',
  styleUrls: ['./plain-users.component.css'],
})
export class PlainUsersComponent implements OnInit {
  constructor(public usersStore: UsersStore) {}

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
