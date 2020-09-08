import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainUsersComponent } from './plain-users.component';

describe('UsersComponent', () => {
  let component: PlainUsersComponent;
  let fixture: ComponentFixture<PlainUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlainUsersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
