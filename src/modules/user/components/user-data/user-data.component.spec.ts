import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataComponent } from './user-data.component';
import { UserComponent } from '../user/user.component';
import { ApiService, PaginationApiService } from '../../../core/services';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserModule } from '../../user.module';

describe('UserDataComponent', () => {
  let componentUser: UserComponent;
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;
  let fixtureUser: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [UserDataComponent, UserComponent],
      providers: [ApiService, PaginationApiService, {
        provide: ActivatedRoute,
        useValue: {snapshot: {params: {'id': '123'}}},
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataComponent);
    fixtureUser = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    // componentUser = fixtureUser.componentInstance;
    fixture.detectChanges();
    fixtureUser.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

