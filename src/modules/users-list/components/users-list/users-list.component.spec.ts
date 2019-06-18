import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule, RouterTestingModule],
      declarations: [ UsersListComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {snapshot: {params: {'id': '123'}}, data: Observable.create([])},
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
