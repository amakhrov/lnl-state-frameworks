import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsUsersComponent } from './ngxs-users.component';

describe('UsersComponent', () => {
  let component: NgxsUsersComponent;
  let fixture: ComponentFixture<NgxsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxsUsersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
