import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobxUsersComponent } from './mobx-users.component';

describe('UsersComponent', () => {
  let component: MobxUsersComponent;
  let fixture: ComponentFixture<MobxUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobxUsersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobxUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
