import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxUsersComponent } from './ngrx-users.component';

describe('NgxsUsersComponent', () => {
  let component: NgrxUsersComponent;
  let fixture: ComponentFixture<NgrxUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxUsersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
