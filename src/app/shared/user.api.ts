import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface User {
  id: string;
  name: string;
}

const user1: User = {
  id: '1',
  name: 'John Doe',
};

const user2: User = {
  id: '2',
  name: 'Jane Moneypenny',
};

let lastId = 3;

@Injectable({ providedIn: 'root' })
export class UserApi {
  list(): Observable<User[]> {
    return of([user1, user2]).pipe(delay(1000));
  }

  remove(id: string): Observable<void> {
    return of(undefined).pipe(delay(500));
  }

  create(name: string): Observable<User> {
    const user: User = {
      id: `${lastId++}`,
      name,
    };

    return of(user).pipe(delay(1000));
  }
}
