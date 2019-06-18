import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserDataComponent } from '../user-data/user-data.component';
import { ApiService, PaginationApiService } from '../../../core/services';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [ UserComponent, UserDataComponent ],
      providers: [ApiService, PaginationApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
